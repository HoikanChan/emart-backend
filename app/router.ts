import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const {auth, goods} = controller;

  router.get('/', controller.home.index);
  // login
  router.post('/user/register', auth.register); // 注册
  router.get('/user/login', auth.login); // 登录
  // goods
  router.get('/goods/list', goods.list);
  router.get('/category/list', goods.category);
  router.get('/goods/details', goods.detail);
};
