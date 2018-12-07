import { Service } from 'egg';
const uuid = require('uuid/v4');
const sha256 = require('js-sha256');


/**
 * Test Service
 */
interface RegisterParams {
  username: string;
  password: string;
  mobile: string;
  userId?: string;
}
interface LoginParams {
  password: string;
  mobile: string;
}

export default class AuthService extends Service {

  public async register(user: RegisterParams) {
    const hadRegistered = await this.checkRegistered(user.mobile);
    if (hadRegistered) {
      return this.ctx.returnError('账号已注册');
    }
    user.userId = uuid();
    user.password = sha256(user.password);
    const userInfo = await this.ctx.model.User.create(user);
    return this.ctx.returnSuccess('注册成功', userInfo);
  }
  public async login(user: LoginParams) {
    const userInDb = await this.getUserByMobile(user.mobile);
    if (!userInDb) {
      return this.ctx.returnError('用户不存在');
    }
    if (userInDb.password !== user.password) {
      return this.ctx.returnError('密码错误');
    }
    return this.ctx.returnSuccess('登录成功', userInDb);
  }
  private async checkRegistered(mobile: string) {

    // 查询用户名
    const user = await this.ctx.model.User.findOne({
        where: {mobile},
    });

    if (user && user.dataValues.userId) {
        return true;
    }

    return false;
  }
  private async getUserByMobile(mobile: string) {

    // 查询用户名
    const user = await this.ctx.model.User.findOne({
        where: {mobile},
    });

    return user;
  }
}
