import TelegramBot from 'node-telegram-bot-api';
import { config } from './config.js';

export class TelegramService {
  private bot: InstanceType<typeof TelegramBot> | null = null;
  private isEnabled: boolean = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    const telegramConfig = config.serverConfig.telegram;

    if (!telegramConfig.enable) {
      console.log('Telegram 机器人未启用');
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
      this.bot = new TelegramBot(telegramConfig.botToken, { polling: false });
      this.isEnabled = true;
      console.log('Telegram 机器人初始化成功');
    } catch (error) {
      console.error('Telegram 机器人初始化失败:', error);
    }
  }

  async sendMessage(message: string): Promise<boolean> {
    if (!this.isEnabled || !this.bot) {
      console.log('Telegram 机器人未启用，跳过发送消息');
      return false;
    }

    try {
      const chatId = config.serverConfig.telegram.chatId;
      await this.bot.sendMessage(chatId, message, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      });
      console.log('Telegram 消息发送成功');
      return true;
    } catch (error) {
      console.error('Telegram 消息发送失败:', error);
      return false;
    }
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
}

export const telegramService = new TelegramService();
