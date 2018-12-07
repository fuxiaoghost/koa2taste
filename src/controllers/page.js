class page {
    async index(ctx) {
        ctx.body = "hello page!";
    }
}

export default new page();