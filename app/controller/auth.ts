import { Controller } from 'egg';

export default class AuthController extends Controller {
  public async login() {
    const { ctx } = this;
    const {password, mobile} = ctx.request.query;
    const user = await ctx.service.auth.login({ password, mobile});
    if (user) {
      ctx.session.currentUser = user.toJSON();
    }
    return ctx.returnSuccess('登录成功', user);

  }
  public async register() {
    const { ctx } = this;
    const {password, username, mobile} = ctx.request.body;
    await ctx.service.auth.register({ password, username, mobile});
  }

}
