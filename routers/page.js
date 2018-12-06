import Router from 'koa-router'
let page = new Router();
page.get('/', async (ctx) => {
    ctx.body = "hello page!";
});

module.exports = page;