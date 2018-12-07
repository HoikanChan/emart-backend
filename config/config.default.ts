import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1543910738782_5841";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // 关闭安全威胁csrf的防范
  config.security = {
    csrf: {
      ignore: (ctx) => {
        const ipReg = /^(172\.17|127\.0)/;
        return ipReg.test(ctx.ip);
      },
    },
  };
  config.middleware = ['errorHandler', 'authorization'];
  // authorization's white list
  config.authWhiteList = [/\/user\/login/, /\/user\/register/];

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
