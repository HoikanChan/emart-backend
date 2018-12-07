import { Service } from 'egg';

export default class CartService extends Service {
  async add({number, productId }) {
    const { userId } = this.ctx.session.currentUser;
    console.log(this.ctx.session.currentUser);
    const cartRecord = await this.ctx.model.Cart.findOne({
      where: {
        productId,
        userId,
      },
    });
    let newCartRecord = null;
    if (cartRecord) {
      newCartRecord = await this.ctx.model.Cart.update({
        number: cartRecord.number + number,
      }, {
        where: {
          productId,
          userId,
        },
      });
    } else {
      newCartRecord = await this.ctx.model.Cart.create({userId, number, productId});
    }
    return this.ctx.returnSuccess('添加购物车成功', newCartRecord);
  }
  async list() {
    // const cartRecord = await this.ctx.model.Cart.findOne({
    //   where: {
    //     productId,
    //   },
    // });
    // let newCartRecord = null;
    // if (cartRecord) {
    //   newCartRecord = await this.ctx.model.Cart.update({
    //     number: cartRecord.number + number,
    //   }, {
    //     where: {
    //       productId,
    //     },
    //   });
    // } else {
    //   newCartRecord = await this.ctx.model.Cart.create({number, productId});
    // }
    // return this.ctx.returnSuccess('添加购物车成功', newCartRecord);
  }
}
