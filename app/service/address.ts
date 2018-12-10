import { Service } from 'egg';
import { Address } from '../interface/address';

export default class CartService extends Service {
  async list() {
    const { userId } = this.ctx.session.currentUser;

    const goodsList = await this.ctx.model.Address.findAll({
      where: {
        userId,
      },
    });
    return this.ctx.returnSuccess('查询成功', goodsList);
  }
  async save(address: Address) {
    const { userId } = this.ctx.session.currentUser;
    let newAddress = {};
    if (address.id === null) {
      delete address.id;
      console.log(address);
      newAddress = await this.ctx.model.Address.create({
        userId,
        ...address,
      });
    } else {
      newAddress = await this.ctx.model.Address.update(address, {
        where: {
          id: address.id,
          userId,
        },
      });
    }
    return this.ctx.returnSuccess('查询成功', newAddress);
  }
}
