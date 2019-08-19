import Api from "../commons/Api";

const baseUrl = "http://localhost:3000";

//获取index的接口地址
const CARURL = `${baseUrl}/api/index`;

export default {
  /*
  * 获取首页的信息
  * */
  getCartInfoByUserId(cb) {
    Api.get(CARURL,cb)
  }
}
