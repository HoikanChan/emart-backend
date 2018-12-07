module.exports = app => {
  const {STRING, INTEGER, DATE, NOW} = app.Sequelize;

  const User = app.model.define('users', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    // 用户id
    userId: {type: INTEGER, allowNull: false},
    // 用户名
    username: {type: STRING(255)},
    // email 地址
    mobile: {type: STRING(255), allowNull: false},
    // 密码
    password: {type: STRING(255), allowNull: false},
    created_at: {type: DATE, defaultValue: NOW},// 创建时间
    updated_at: {type: DATE, defaultValue: NOW}// 更新时间
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return User;
};
