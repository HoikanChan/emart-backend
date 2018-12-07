import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'emart',
    username: 'root',
    password: '123456',
    operatorsAliases: false,
    define: {
      timestamps: false,
    }
  };
  return config;
};
