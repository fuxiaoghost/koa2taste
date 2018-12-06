import Koa from 'koa'
import router from './routers/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa();

// body parser
app.use(bodyParser());

// 加载路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('start ....');
});
