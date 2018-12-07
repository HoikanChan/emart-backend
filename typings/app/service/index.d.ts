// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/service/auth';
import ExportCart from '../../../app/service/cart';
import ExportGoods from '../../../app/service/goods';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    auth: ExportAuth;
    cart: ExportCart;
    goods: ExportGoods;
    test: ExportTest;
  }
}
