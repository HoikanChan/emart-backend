import { Controller } from 'egg';
import { Address } from '../interface/address';
export default class AddressController extends Controller {
  public async list() {
    const { ctx } = this;
    await ctx.service.address.list();
  }
  // public async delete() {
  //   const { ctx } = this;
  //   const {number, productId} = this.ctx.request.body;
  //   await ctx.service.address.add({number, productId});
  // }
  public async save() {
    const { ctx } = this;
    const address: Address = this.ctx.request.body;
    await ctx.service.address.save(address);
  }
}
