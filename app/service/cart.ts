import { Service } from 'egg';

export default class CartService extends Service {
  async add({number, productId }) {
    const { userId } = this.ctx.session.currentUser;
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
    const cartList = await this.getCart();
    // 已选择商品总金额
    let checkedGoodsAmount = 0;
    cartList.forEach((cartItem) => {
      if (cartItem.checked) {
        checkedGoodsAmount += cartItem.toJSON().number * cartItem.product.toJSON().marketPrice;
      }
    });
    return this.ctx.returnSuccess('查询成功', {
      cartTotal: {
        checkedGoodsAmount,
      },
      cartList,
    });
  }
  async check({cartIds, isChecked}) {
    const { userId } = this.ctx.session.currentUser;
    await this.ctx.model.Cart.update({
      checked: isChecked,
    }, {
      where: {
        id: cartIds,
        userId,
      },
    });
    return this.list();
  }
  async update({cartId, number, productId}) {
    const { userId } = this.ctx.session.currentUser;
    await this.ctx.model.Cart.update({
      number,
    }, {
      where: {
        id: cartId,
        productId,
        userId,
      },
    });
    return this.list();
  }
  async delete({cartIds}) {
    const { userId } = this.ctx.session.currentUser;
    const cartRecord = await this.ctx.model.Cart.findOne({where: {
      id: cartIds,
      userId,
    }});
    await cartRecord.destroy();
    return this.list();
  }
  async checkout() {

    const checkedGoodsList = await this.getCart(true);
    const dbPromises = checkedGoodsList.map(async (i) => await i.destroy());
    await Promise.all(dbPromises);
    let orderTotalPrice = 0;
    let goodsTotalPrice = 0;
    let goodsTotalNumber = 0;
    checkedGoodsList.forEach((product) => {
      orderTotalPrice += product.toJSON().number * product.product.toJSON().marketPrice;
      goodsTotalPrice += product.toJSON().number * product.product.toJSON().marketPrice;
      goodsTotalNumber += product.toJSON().number;
    });

    return  this.ctx.returnSuccess('结算成功', {
      checkedGoodsList,
      orderTotalPrice,
      goodsTotalPrice,
      goodsTotalNumber,
    });
  }
  // 获取购物车
  private async getCart(getChecked?: boolean) {
    const Sequelize = this.ctx.app.Sequelize;
    const { userId } = this.ctx.session.currentUser;
    const cartList = await this.ctx.model.Cart.findAll({
      where: getChecked ? {
        userId,
        checked: 1,
      } : {
        userId,
      },
      include: [{
        model: this.ctx.model.Product,
        where: { productId: Sequelize.col('product.id') },
        as: 'product',
        attributes: [
          ['specificationValue', 'goodsSpecifitionNameValue'],
          ['retailPrice', 'marketPrice' ],
          'goodsName',
        ],
      }],
    });
    return cartList;
  }
}
