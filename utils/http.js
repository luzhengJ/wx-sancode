import {config} from "../config/config"
import {wxToPromise} from "./wxToPromise"

class Http{
  // 公有方法
  static request({url,method="GET",data={},header={}}){
    return Http._request({url,method,data,header})
  }
  // 私有方法
  static async _request({url,method,data,header}){
    const res = await wxToPromise("request",{
      url:config.baseUrl + url,
      method,
      data,
      header:{
        devicetype:config.devicetype,
        ...header
      }
    })
    return res
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