import Router from 'koa-router'
import page from './page'
import root from './root'

let router = new Router();
router.use('/', root.routes(), root.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

module.exports = router;