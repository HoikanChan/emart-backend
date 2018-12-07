// 扩展一些框架便利的方法
module.exports = {
  /**
   * 返回客户端内容
   * @param status // 返回状态
   * @param errmsg // 返回内容
   * @param data // 返回内容
   */
  returnSuccess ( errmsg: string, data = {}, status: number = 200) {
    this.status = status;
    this.body = {
      data,
      errmsg,
      errno: 0,
    };
  },
  returnError( errmsg: string, data = null, status: number = 200) {
    this.status = status;
    this.body = {
      data,
      errmsg,
      errno: 1,
    };
  },
  /**
   * 驼峰转下划线
   * @param obj // 转换对象
   * @return newObj // 返回转换完成的新对象
   */
  // humpToUnderline (obj) {
  //   let newKey = obj.keys()
  //   let newObj = {}
  //   let humpReg = /([A-Z])/g

  //   newKey.forEach((item) => {
  //     newObj[item.replace(humpReg,"_$1").toLowerCase()] = obj[item]
  //   })
  //   return newObj
  // }
};
