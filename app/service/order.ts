import { Service } from 'egg';
import { PaginationParams } from '../public/interface';
import orderStatuses from '../public/orderStatus';
export default class OrderService extends Service {
  async submit({addressId, passwd, postscript, orderId}) {
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
    const order = await this.ctx.model.Order.update({
      orderStatus: 201,
      orderStatusText: orderStatuses[201],
      postscript,
      addressId,
    }, {
      where: {
        userId,
        id: orderId,
      },
    });
    return this.ctx.returnSuccess('下单成功', order);
  }
  async list(paginationParams: PaginationParams) {
    let orderList = await this.ctx.model.Order.findAll({
      ...paginationParams,
      include: [{
        model: this.ctx.model.OrderHandleOptions,
        as: 'handleOption',
      }],
    });
    orderList = orderList.map((order) => {
      order.orderGoodsEntityList = JSON.parse(order.orderGoodsEntityList);
      return order;
    });
    return this.ctx.returnSuccess('查询成功', orderList);
  }
  async create(orderContent, orderPrice: number, goodsCount: number) {
    const { userId } = this.ctx.session.currentUser;
    return await this.ctx.model.Order.create({
      userId,
      orderPrice,
      goodsCount,
      orderGoodsEntityList: JSON.stringify(orderContent),
      orderStatus: 200,
      orderStatusText: orderStatuses[200],
    });
  }
}
