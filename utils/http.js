import {config} from "../config/config"
import {wxToPromise} from "./wxToPromise"
import {exceptionMessage} from "../config/exception-message"
class Http{
  // 公有方法
  static request({url,method="GET",data={},header={}}){
    // 开启全局Loading加载
    wx.showLoading({
      title: '加载中',
    })
    let token = true
    if(token) header.token = "aidls"
    return Http._request({url,method,data,header})
  }
  // 私有方法
  static async _request({url,method,data,header}){
    try {
      const res = await wxToPromise("request",{
        url:config.baseUrl + url,
        method,
        data,
        header:{
          devicetype:config.devicetype,
          ...header
        }
      })
      //请求成功后 将成功的数据返回出去
      if(res.statusCode === 200){
        return res.data.result
      }
      // 请求失败 错误提示
      Http._showErrorMessage(res.statusCode,res.data.msg)
    } catch (error) {
      console.log(error);
    }finally{
      // 无论加载成功或失败  关闭全局Loading加载
      wx.hideLoading()
    }
  }

  // 错误信息提示
  static _showErrorMessage(error_code,msg){
    let title = exceptionMessage[error_code || msg || "未知错误"]
    wx.showToast({
      title:title,
      icon:"none",
      duration:3000
    })
  }
}

export default Http





// class Box{
//     test(){
//         console.log("res");
//     }
//     static run(){
//         console.log("run");
//     }
// }
// const box = new Box()
// box.test()
// Box.run()


// import "./wxToPromise"
// function request(){
//     wx.request({
//         url:config.baseUrl + '/app/banner',
//         method:'GET',
//         header:{
//             devicetype:config.devicetype
//         },
//         success:(response)=>{
//             console.log(response);
//         },
//         fail:(error)=>{
//             console.log(error);
//         }
//     })
// }

// export default request