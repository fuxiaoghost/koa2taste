import Router from 'koa-router'
import rootController from '../controllers/root'

let root = new Router();
root.get('/', rootController.index);
root.get('query',rootController.query);
root.get('update', rootController.getUpdate);
root.post('update', rootController.postUpdate);
root.get('cookies', rootController.cookies);

module.exports = root;