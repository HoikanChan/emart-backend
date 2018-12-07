// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/service/auth';
import ExportGoods from '../../../app/service/goods';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    auth: ExportAuth;
    goods: ExportGoods;
    test: ExportTest;
  }
}
