import { Service } from 'egg';
import { PaginationParams } from '../public/interface';

export default class GoodsService extends Service {
  async getCategories() {
    const categories = await this.ctx.model.Category.findAll();
    return this.ctx.returnSuccess('查询成功', {categoryList: categories});
  }
  async getList(paginationParams: PaginationParams, categoryId?) {
    const queryParams = categoryId ? {...paginationParams, where: {categoryId}} : paginationParams;
    const goodsList = await this.ctx.model.Goods.findAll(queryParams);
    return this.ctx.returnSuccess('查询成功', goodsList);
  }
  async getDetail(goodsId) {
    const info = await this.ctx.model.Goods.findOne({where: {id: goodsId}});
    const productList = await this.ctx.model.Product.findAll({where: {goodsId}});
    const specificationList = await this.ctx.model.Spec.findAll({where: {goodsId}});
    for (let spec of specificationList) {
      const valueList = await this.ctx.model.SpecValue.findAll({where: {specificationId: spec.id}});
      spec.dataValues.valueList = valueList;
    }
    return this.ctx.returnSuccess('查询成功', {info, productList, specificationList});
  }
}
