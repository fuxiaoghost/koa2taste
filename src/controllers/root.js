class root {
    async index(ctx) {
        ctx.body = "hello root!";
    }

    async query(ctx) {
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
    }

    async getUpdate(ctx) {
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
    }

    async postUpdate(ctx) {
        let postData = ctx.request.body;
        ctx.body = postData;
    }
    
    async cookies(ctx) {
        ctx.cookies.set(
            'cid',
            'hello world',
            {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/cookies',       // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2017-02-15'),  // cookie失效时间
                httpOnly: false,  // 是否只用于http请求中获取
                overwrite: false  // 是否允许重写
            }
        );
        ctx.body = 'cookies';
    }
}

export default new root();