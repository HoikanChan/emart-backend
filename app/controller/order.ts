import { Controller } from 'egg';

export default class OrderController extends Controller {
  public async submit() {
    const { ctx } = this;
    const {addressId, passwd, postscript} = ctx.request.body;
    await ctx.service.order.submit({addressId, passwd, postscript});
  }
  public async list() {
    const { ctx } = this;
    const {limit, offset} = this.ctx.request.query;
    await ctx.service.order.list({limit: Number(limit), offset: Number(offset)});
  }
}
