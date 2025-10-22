import Router from '@koa/router';
import type { Context } from 'koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { AWC } from './gameFrom/awc.js';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/health', async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };
});

router.get('/awc', async (ctx: Context) => {
  try {
    const awc = new AWC('JILI', 'SLOT');
    const loginFormUrl = await awc.getLoginFormUrl();

    ctx.redirect(loginFormUrl);
  } catch (error) {
    console.error('获取登录表单URL失败:', error);
    ctx.status = 500;
    ctx.body = {
      error: '获取登录表单URL失败',
      message: error instanceof Error ? error.message : '未知错误',
    };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
  console.log(`访问 http://localhost:${PORT}/awc 获取登录表单URL`);
});

export default app;
