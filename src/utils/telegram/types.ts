export interface MessageResult {
  success: boolean;
  message: string;
  timestamp: Date;
  error?: string;
}

export interface ReceivedMessage {
  messageId: number;
  text: string;
  from: {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
  };
  chat: {
    id: number;
    type: string;
  };
  date: number;
  timestamp: Date;
}

export interface TelegramMessage {
  message_id: number;
  text?: string;
  from: {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
  };
  chat: {
    id: number;
    type: string;
  };
  date: number;
}

export enum TelegramEventName {
  PROCESS = 'process',
  MESSAGE = 'message',
}
