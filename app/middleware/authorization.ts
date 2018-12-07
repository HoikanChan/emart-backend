module.exports = (options, app) => {
  return async function checkLogin(ctx, next) {
    if (app.config.authWhiteList.some((auth) => auth.test(ctx.request.url))) {
      await next(options);
      return;
    } else {
      const user = ctx.session.currentUser;
      if (!user) {
        ctx.returnError('用户未登录');
        return;
      }
      await next(options);
    }
  };
};
