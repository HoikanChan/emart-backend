// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress from '../../../app/model/address';
import ExportCart from '../../../app/model/cart';
import ExportCategory from '../../../app/model/category';
import ExportGoods from '../../../app/model/goods';
import ExportProduct from '../../../app/model/product';
import ExportSpec from '../../../app/model/spec';
import ExportSpecValue from '../../../app/model/specValue';
import ExportUser from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Address: ReturnType<typeof ExportAddress>;
    Cart: ReturnType<typeof ExportCart>;
    Category: ReturnType<typeof ExportCategory>;
    Goods: ReturnType<typeof ExportGoods>;
    Product: ReturnType<typeof ExportProduct>;
    Spec: ReturnType<typeof ExportSpec>;
    SpecValue: ReturnType<typeof ExportSpecValue>;
    User: ReturnType<typeof ExportUser>;
  }
}
