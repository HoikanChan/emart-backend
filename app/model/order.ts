module.exports = app => {
  const {STRING, INTEGER, DATE, NOW, TEXT, DECIMAL} = app.Sequelize;

  const Order = app.model.define('order', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: STRING(255)},
    orderStatus: {type: INTEGER },
    orderStatusText: {type: STRING(255)},
    orderGoodsEntityList: {type: TEXT},
    addressId: {type: INTEGER },
    goodsCount: {type: INTEGER },
    orderPrice: {type: DECIMAL(10, 2) },
    shippingFee: {type: DECIMAL(10, 2) },
    postscript: {type: STRING(255) },
    created_at: {type: DATE, defaultValue: NOW}, // 创建时间
    updated_at: {type: DATE, defaultValue: NOW}, // 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });
  Order.associate = () => {
    app.model.Order.belongsTo(app.model.OrderHandleOptions, { as: 'handleOption', foreignKey: 'orderStatus' });
  };
  return Order;
};
