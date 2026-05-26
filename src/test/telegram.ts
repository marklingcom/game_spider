import { telegramService } from '../utils/telegram.js';

async function telegramExample() {
  console.log('开始 Telegram 机器人测试...');

  if (!telegramService.isTelegramEnabled()) {
    console.log('Telegram 机器人未启用，请检查配置');
    return;
  }

  try {
    await telegramService.sendInfo('机器人测试开始', {
      timestamp: new Date().toISOString(),
      test: true,
    });

    await telegramService.sendSuccess('这是一条成功消息', {
      operation: 'test',
      result: 'success',
    });

    await telegramService.sendWarning('这是一条警告消息', {
      level: 'medium',
      action: 'check_config',
    });

    await telegramService.sendError('这是一条错误消息（测试）', '测试上下文');

    console.log('Telegram 测试完成');
  } catch (error) {
    console.error('Telegram 测试失败:', error);
  }
}

if (require.main === module) {
  telegramExample();
}
