module.exports = app => {
  const {STRING, INTEGER} = app.Sequelize;
  // const {STRING, INTEGER, DATE, NOW} = app.Sequelize;

  const SpecValue = app.model.define('specification_value', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    goodsName: {type: STRING(255) },
    goodsId: {type: INTEGER },
    specificationId: {type: INTEGER },
    specificationName: {type: STRING(255) },
    value: {type: STRING(255) },
    // created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    // updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return SpecValue;
};
