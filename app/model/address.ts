module.exports = app => {
  const {STRING, INTEGER, BOOLEAN} = app.Sequelize;

  const Address = app.model.define('address', {
    // 记录id
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: STRING },
    userName: {type: STRING },
    telNumber: {type: STRING },
    countyName: {type: STRING },
    provinceName: {type: STRING },
    cityName: {type: STRING },
    detailInfo: {type: INTEGER },
    isDefault: {type: BOOLEAN },
  }, {
    freezeTableName: true, // 不自动将表名添加复数
  });
  return Address;
};
