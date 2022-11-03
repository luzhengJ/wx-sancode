import {cache} from "../menu/cache"
// 添加购物车数据
const addCart =(data)=>{
   const carts = wx.getStorageSync(cache.CARTS) || []
  //  第一次添加
   if(carts.length <= 0){
     data.num = 1
     carts.push(data)
    //  本地没有购物车数据，直接将扫码的商品添加到本地
    // wx.setStorageSync('carts', carts)
   }else{
    //  本地有数据不是第一次添加
    if(_hasData(data)){
      data.num = 1
      carts.push(data)
      // wx.setStorageSync('carts', carts)
    }else{
    carts.forEach(item=>{
      if(item._id === data._id){
        item.num += 1
      }
    })
  }
   }
   wx.setStorageSync(cache.CARTS, carts)
   console.log(wx.getStorageSync(cache.CARTS));
}
// 判断要添加的数据是否存在
const _hasData =(data)=>{
   const carts = wx.getStorageSync(cache.CARTS)
   const index = carts.findIndex(item=> item._id === data._id)
   console.log(index);
   return index < 0 ? true :false 
}
export {addCart}