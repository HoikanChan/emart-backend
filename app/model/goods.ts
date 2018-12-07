module.exports = app => {
  const {STRING, INTEGER, DATE, NOW, FLOAT} = app.Sequelize;

  const Goods = app.model.define('goods', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    goodsName: {type: STRING(255) },
    goodsNumber: {type: INTEGER },
    gradeId: {type: INTEGER },
    memberPrice: {type: FLOAT(10) },
    memberPriceJson: {type: STRING(255) },
    primaryPicUrl: {type: STRING(255) },
    retailPrice: {type: FLOAT(10) },
    promotionDesc: {type: STRING(255) },
    categoryId: {type: INTEGER },
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Goods;
};
