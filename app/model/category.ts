module.exports = app => {
  const {STRING, INTEGER} = app.Sequelize;

  const Category = app.model.define('category', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    // 用户id
    name: {type: STRING(255), allowNull: false},
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });

  return Category;
};
