import { Controller } from 'egg';
import { Address } from '../public/interface';

export default class AddressController extends Controller {
  public async list() {
    const { ctx } = this;
    await ctx.service.address.list();
  }
  public async delete() {
    const { ctx } = this;
    const { id } = this.ctx.request.query;
    await ctx.service.address.delete(Number(id));
  }
  public async save() {
    const { ctx } = this;
    const address: Address = this.ctx.request.body;
    await ctx.service.address.save(address);
  }
}
