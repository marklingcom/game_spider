import { telegramService } from './service.js';

interface ProgressNotifierOptions {
  threshold?: number;
}

interface ProgressNotifyOptions {
  name: string;
  current: number;
  total: number;
}

interface ProgressNotifyState {
  isInitialNotified: boolean;
  lastProgress: number | null;
  isCompleteNotified: boolean;
}

export class ProgressNotifier {
  private readonly threshold: number;
  private readonly stateMap = new Map<string, ProgressNotifyState>();

  constructor(options: ProgressNotifierOptions = {}) {
    this.threshold = options.threshold ?? 3;
  }

  notifyInitial(options: ProgressNotifyOptions): void {
    const { name, current, total } = options;
    if (total <= 0) {
      return;
    }

    const state = this.getState(name);
    if (state.isInitialNotified) {
      return;
    }

    state.isInitialNotified = true;
    state.lastProgress = Math.floor((current / total) * 100);
    telegramService.sendSuccess(
      `表 ${name} 当前抓取进度: ${state.lastProgress}% (${current}/${total})`
    );
  }

  notify(options: ProgressNotifyOptions): void {
    const { name, current, total } = options;
    if (total <= 0) {
      return;
    }

    if (current >= total) {
      this.notifyComplete(options);
      return;
    }

    const progress = Math.floor((current / total) * 100);
    if (progress <= 0) {
      return;
    }

    const state = this.getState(name);
    if (state.lastProgress === null || progress >= state.lastProgress + this.threshold) {
      state.lastProgress = progress;
      telegramService.sendSuccess(`表 ${name} 抓取进度: ${progress}% (${current}/${total})`);
    }
  }

  notifyComplete(options: ProgressNotifyOptions): void {
    const { name, total } = options;
    if (total <= 0) {
      return;
    }

    const state = this.getState(name);
    if (state.isCompleteNotified) {
      return;
    }

    state.isCompleteNotified = true;
    state.lastProgress = 100;
    telegramService.sendSuccess(`${name} 完成所有数据抓取`);
  }

  private getState(name: string): ProgressNotifyState {
    let state = this.stateMap.get(name);
    if (!state) {
      state = {
        isInitialNotified: false,
        lastProgress: null,
        isCompleteNotified: false,
      };
      this.stateMap.set(name, state);
    }
    return state;
  }
}
