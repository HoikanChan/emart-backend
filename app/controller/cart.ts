import { Controller } from 'egg';

export default class CartController extends Controller {
  public async add() {
    const { ctx } = this;
    const {number, productId} = this.ctx.request.body;
    await ctx.service.cart.add({number, productId});
  }
  public async list() {
    const { ctx } = this;
    await ctx.service.cart.list();
  }
}
