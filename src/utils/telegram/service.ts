import EventEmitter from 'node:events';
import TelegramBot from 'node-telegram-bot-api';
import { config } from '../../config/index.js';
import { isProd } from '../env.js';
import { sleep } from '../utils.js';
import {
  TelegramEventName,
  type MessageResult,
  type ReceivedMessage,
  type TelegramMessage,
} from './types.js';

interface MessageQueueItem {
  message: string;
  resolve: (value: boolean) => void;
  reject: (reason?: unknown) => void;
}

export class TelegramService extends EventEmitter {
  private bot: InstanceType<typeof TelegramBot> | null = null;
  private isEnabled: boolean = false;
  private messageQueue: MessageQueueItem[] = [];
  private isProcessing: boolean = false;
  private delayMs: number = 1000;
  private messageReceivedCallback?: (message: ReceivedMessage) => void;

  constructor() {
    super();
    this.initialize();
  }

  private initialize(): void {
    const telegramConfig = config.serverConfig.telegram;

    if (!isProd || !telegramConfig.enable) {
      // console.log('Telegram 机器人未启用');
      return;
    }

    if (!telegramConfig.botToken || telegramConfig.botToken === 'YOUR_BOT_TOKEN_HERE') {
      console.warn('Telegram Bot Token 未配置或使用默认值');
      return;
    }

    if (!telegramConfig.chatId || telegramConfig.chatId === 'YOUR_CHAT_ID_HERE') {
      console.warn('Telegram Chat ID 未配置或使用默认值');
      return;
    }

    try {
      this.bot = new TelegramBot(telegramConfig.botToken, { polling: true });
      this.isEnabled = true;

      this.initMessage();
    } catch (error) {
      console.error('Telegram 机器人初始化失败:', error);
    }
  }

  private initMessage() {
    this.setupMessageHandlers();
    console.log('Telegram 机器人初始化成功，已启用消息接收');

    this.setMessageHandler((message, reply) => {
      if (message.text === '/process') {
        this.emit(TelegramEventName.PROCESS, reply);
      }
    });
  }

  private setupMessageHandlers(): void {
    if (!this.bot) return;

    this.bot.on('message', (msg) => {
      this.handleReceivedMessage(msg);
    });

    this.bot.on('error', (error) => {
      console.error('Telegram Bot 错误:', error);
    });
  }

  private handleReceivedMessage(msg: unknown): void {
    try {
      const message = msg as TelegramMessage;
      const receivedMessage: ReceivedMessage = {
        messageId: message.message_id,
        text: message.text || '',
        from: {
          id: message.from.id,
          username: message.from.username,
          first_name: message.from.first_name,
          last_name: message.from.last_name,
        },
        chat: {
          id: message.chat.id,
          type: message.chat.type,
        },
        date: message.date,
        timestamp: new Date(message.date * 1000),
      };

      this.onMessageReceived(receivedMessage);
    } catch (error) {
      console.error('处理接收消息失败:', error);
    }
  }

  private onMessageReceived(message: ReceivedMessage): void {
    console.log('收到 Telegram 消息:', {
      from: message.from.username || message.from.first_name,
      text: message.text,
      timestamp: message.timestamp.toISOString(),
    });

    this.messageReceivedCallback?.(message);
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.messageQueue.length === 0) {
      return;
    }

    this.isProcessing = true;

    while (this.messageQueue.length > 0) {
      const item = this.messageQueue.shift();
      if (!item) break;

      try {
        const result = await this.sendMessageDirect(item.message);
        item.resolve(result.success);
      } catch (error) {
        item.reject(error);
      }

      // if (this.messageQueue.length > 0) {
      await sleep(this.delayMs);
      // }
    }

    this.isProcessing = false;
  }

  private async sendMessageDirect(message: string): Promise<MessageResult> {
    const timestamp = new Date();

    if (!this.isEnabled || !this.bot) {
      const errorMsg = 'Telegram 机器人未启用，跳过发送消息';
      // console.log(errorMsg);
      return {
        success: false,
        message,
        timestamp,
        error: errorMsg,
      };
    }

    try {
      const chatId = config.serverConfig.telegram.chatId;
      await this.bot.sendMessage(chatId, message, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      });
      console.log('Telegram 消息发送成功');
      return {
        success: true,
        message,
        timestamp,
      };
    } catch (error) {
      const errorMsg = `Telegram 消息发送失败: ${error}`;
      console.error(errorMsg);
      return {
        success: false,
        message,
        timestamp,
        error: errorMsg,
      };
    }
  }

  async sendMessage(message: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.messageQueue.push({ message, resolve, reject });
      this.processQueue();
    });
  }

  async sendMessageWithResult(message: string): Promise<MessageResult> {
    return this.sendMessageDirect(message);
  }

  async sendFormattedMessage(
    title: string,
    content: string,
    data?: Record<string, unknown>
  ): Promise<boolean> {
    let message = `<b>${title} (${config.serverConfig.telegram.machine})</b>\n\n${content}`;

    if (data && Object.keys(data).length > 0) {
      message += '\n\n<b>详细信息:</b>\n';
      for (const [key, value] of Object.entries(data)) {
        message += `<code>${key}:</code> ${value}\n`;
      }
    }

    return this.sendMessage(message);
  }

  async sendError(error: string, context?: string): Promise<boolean> {
    const title = '❌ 错误报告';
    let content = `错误: ${error}`;

    if (context) {
      content += `\n上下文: ${context}`;
    }

    return this.sendFormattedMessage(title, content);
  }

  async sendSuccess(message: string, data?: Record<string, unknown>): Promise<boolean> {
    const title = '✅ 成功通知';
    return this.sendFormattedMessage(title, message, data);
  }

  async sendWarning(message: string, data?: Record<string, unknown>): Promise<boolean> {
    const title = '⚠️ 警告通知';
    return this.sendFormattedMessage(title, message, data);
  }

  async sendInfo(message: string, data?: Record<string, unknown>): Promise<boolean> {
    const title = 'ℹ️ 信息通知';
    return this.sendFormattedMessage(title, message, data);
  }

  isTelegramEnabled(): boolean {
    return this.isEnabled;
  }

  setMessageHandler(
    handler: (message: ReceivedMessage, reply: (text: string) => Promise<boolean>) => void
  ): void {
    this.messageReceivedCallback = (message: ReceivedMessage) => {
      const reply = async (text: string): Promise<boolean> => {
        if (!this.isEnabled || !this.bot) {
          // console.log('Telegram 机器人未启用，跳过发送消息');
          return false;
        }

        try {
          await this.bot.sendMessage(message.chat.id, text, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          });
          console.log('Telegram 回复消息发送成功');
          return true;
        } catch (error) {
          console.error('Telegram 回复消息发送失败:', error);
          return false;
        }
      };
      handler(message, reply);
      this.emit(TelegramEventName.MESSAGE, message, reply);
    };
  }
}

export const telegramService = new TelegramService();
