module.exports = app => {
  const {INTEGER, BOOLEAN} = app.Sequelize;

  const OrderHandleOptions = app.model.define('order_handle_options', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    confirm: {type: BOOLEAN },
    cancel: {type: BOOLEAN },
    delete: {type: BOOLEAN },
    pay: {type: BOOLEAN },
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });
  // OrderHandleOptions.associate = () => {
  //   app.model.OrderHandleOptions.hasMany(app.model.Order, { as: 'order' });
  // };
  return OrderHandleOptions;
};
