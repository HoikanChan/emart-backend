import { Service } from 'egg';
import { Address } from '../public/interface';

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
      newAddress = await this.ctx.model.Address.create({
        userId,
        ...address,
      });
    } else {
      const where = {
        id: address.id,
        userId,
      };
      await this.ctx.model.Address.update(address, { where });
      newAddress = await this.ctx.model.Address.findOne(address, { where });
    }
    return this.ctx.returnSuccess('查询成功', newAddress);
  }
  async delete(id: number) {
    const { userId } = this.ctx.session.currentUser;
    const addressRecord = await this.ctx.model.Address.findOne({where: {
      id,
      userId,
    }});
    await addressRecord.destroy();
    return this.ctx.returnSuccess('删除成功', {});
  }
}
