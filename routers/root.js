import Router from 'koa-router'
let root = new Router();
root.get('/', async (ctx) => {
    ctx.body = "hello root!";
});

module.exports = root;