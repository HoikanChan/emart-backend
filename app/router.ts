import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const {auth, goods, cart, address, order} = controller;

  router.get('/', controller.home.index);
  // login
  router.post('/user/register', auth.register); // 注册
  router.get('/user/login', auth.login); // 登录
  // goods
  router.get('/goods/list', goods.list);
  router.get('/category/list', goods.category);
  router.get('/goods/details', goods.detail);
  // cart
  router.post('/cart/add', cart.add);
  router.get('/cart/getCart', cart.list);
  router.post('/cart/checked', cart.check);
  router.post('/cart/update', cart.update);
  router.post('/cart/delete', cart.delete);
  router.post('/cart/checkout', cart.checkout);
  // address
  router.get('/address/list', address.list);
  router.get('/address/delete', address.delete);
  router.post('/address/save', address.save);
  // oreder
  router.post('/order/submit', order.submit);
  router.get('/order/list', order.list);
};
