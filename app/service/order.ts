import { Service } from 'egg';
import { PaginationParams } from '../public/interface';
export default class CartService extends Service {
  async submit({addressId, passwd, postscript}) {
    const { userId } = this.ctx.session.currentUser;
    const user = await this.ctx.model.User.findOne({
      where: {
        userId,
      },
    });
    if (passwd !== user.password) {
      return this.ctx.returnError('密码错误', {});
    }
    if (!addressId) {
      return this.ctx.returnError('请选择地址', {});
    }
    const order = await this.ctx.model.Order.create({addressId, passwd, postscript});
    return this.ctx.returnSuccess('下单成功', order);
  }
  async list(paginationParams: PaginationParams) {
    const orderList = await this.ctx.model.Order.findAll(paginationParams);
    return this.ctx.returnSuccess('查询成功', orderList);
  }
}
