import Router from 'koa-router'

let root = new Router();
root.get('/', async (ctx) => {
    ctx.body = "hello root!";
});
root.get('query', async(ctx) => {
    let url = ctx.url
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
  
    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
  
    ctx.body = {
      url,
      req_query,
      req_querystring,
      ctx_query,
      ctx_querystring
    }
});
root.get('update', async(ctx) => {
    let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/update">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
  `;
    ctx.body = html;
});
root.post('update', async(ctx) => {
    let postData = ctx.request.body;
    ctx.body = postData;
});

module.exports = root;