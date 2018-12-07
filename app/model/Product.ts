module.exports = app => {
  const {STRING, INTEGER, FLOAT} = app.Sequelize;
  // const {STRING, INTEGER, DATE, NOW, FLOAT} = app.Sequelize;

  const Product = app.model.define('product', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    goodsName: {type: STRING(255) },
    goodsId: {type: INTEGER },
    memberPrice: {type: FLOAT(10) },
    retailPrice: {type: FLOAT(10) },
    goodsNumber: {type: INTEGER },
    goodsSpecificationIds: {type: STRING(255) },
    specificationValue: {type: STRING(255) },
    // created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    // updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Product;
};
