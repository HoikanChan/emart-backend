module.exports = app => {
  const {STRING, INTEGER, DATE, NOW, BOOLEAN} = app.Sequelize;

  const Cart = app.model.define('cart', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: STRING },
    checked: {type: BOOLEAN },
    productId: {type: INTEGER },
    number: {type: INTEGER },
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Cart;
};
