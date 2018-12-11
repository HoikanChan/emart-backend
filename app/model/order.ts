module.exports = app => {
  const {STRING, INTEGER, DATE, NOW} = app.Sequelize;

  const Order = app.model.define('order', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    addressId: {type: INTEGER },
    postscript: {type: STRING(255) },
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Order;
};
