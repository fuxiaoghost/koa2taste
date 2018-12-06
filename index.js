import Koa from 'koa'
import router from './routers/router'

const app = new Koa();

// 加载路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('start ....');
});
