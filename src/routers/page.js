import Router from 'koa-router'
import pageController from '../controllers/page'

let page = new Router();
page.get('/', pageController.index);

module.exports = page;