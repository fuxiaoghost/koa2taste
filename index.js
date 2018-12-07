import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import {router, db} from './src/index'

const app = new Koa();

// body parser
app.use(bodyParser());

// 配置控制台日志中间件
app.use(logger());

// 加载路由
app.use(router.routes()).use(router.allowedMethods());

// 连接数据库
db();

app.listen(3000, () => {
    console.log('start ....');
});
