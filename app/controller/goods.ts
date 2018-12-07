import { Controller } from 'egg';

export default class GoodsController extends Controller {
  public async list() {
    const { ctx } = this;
    const {limit, offset, categoryId} = this.ctx.request.query;
    await ctx.service.goods.getList({limit: Number(limit), offset: Number(offset)}, categoryId);
  }
  public async category() {
    const { ctx } = this;
    await ctx.service.goods.getCategories();
  }
  public async detail() {
    const { ctx } = this;
    const {goodsId} = this.ctx.request.query;
    if (!goodsId) {
      ctx.returnError('缺少商品Id');
    }
    await ctx.service.goods.getDetail(goodsId);
  }
}
