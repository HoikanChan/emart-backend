// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress from '../../../app/controller/address';
import ExportAuth from '../../../app/controller/auth';
import ExportCart from '../../../app/controller/cart';
import ExportGoods from '../../../app/controller/goods';
import ExportHome from '../../../app/controller/home';
import ExportOrder from '../../../app/controller/order';

declare module 'egg' {
  interface IController {
    address: ExportAddress;
    auth: ExportAuth;
    cart: ExportCart;
    goods: ExportGoods;
    home: ExportHome;
    order: ExportOrder;
  }
}
