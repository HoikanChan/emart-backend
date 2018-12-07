module.exports = app => {
  // const {STRING, INTEGER, DATE, NOW} = app.Sequelize;
  const {STRING, INTEGER} = app.Sequelize;

  const Spec = app.model.define('specification', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING(255) },
    goodsId: {type: INTEGER },
    // created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    // updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Spec;
};
