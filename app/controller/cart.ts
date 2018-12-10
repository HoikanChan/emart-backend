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
  public async check() {
    const { ctx } = this;
    const {cartIds, isChecked} = this.ctx.request.body;
    await ctx.service.cart.check({cartIds, isChecked});
  }
  public async update() {
    const { ctx } = this;
    const {cartId, number, productId} = this.ctx.request.body;
    await ctx.service.cart.update({cartId, number, productId});
  }
  public async delete() {
    const { ctx } = this;
    const {cartIds} = this.ctx.request.body;
    await ctx.service.cart.delete({cartIds});
  }
  public async checkout() {
    const { ctx } = this;
    await ctx.service.cart.checkout();
  }
}
