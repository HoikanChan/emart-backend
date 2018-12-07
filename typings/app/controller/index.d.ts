// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/controller/auth';
import ExportCart from '../../../app/controller/cart';
import ExportGoods from '../../../app/controller/goods';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    cart: ExportCart;
    goods: ExportGoods;
    home: ExportHome;
  }
}
