import { Controller } from 'egg';

export default class AuthController extends Controller {
  public async login() {
    const { ctx } = this;
    const {password, mobile} = ctx.request.query;
    await ctx.service.auth.login({ password, mobile});
  }
  public async register() {
    const { ctx } = this;
    const {password, username, mobile} = ctx.request.body;
    await ctx.service.auth.register({ password, username, mobile});
  }

}
