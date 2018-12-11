// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress from '../../../app/service/address';
import ExportAuth from '../../../app/service/auth';
import ExportCart from '../../../app/service/cart';
import ExportGoods from '../../../app/service/goods';
import ExportOrder from '../../../app/service/order';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    address: ExportAddress;
    auth: ExportAuth;
    cart: ExportCart;
    goods: ExportGoods;
    order: ExportOrder;
    test: ExportTest;
  }
}
