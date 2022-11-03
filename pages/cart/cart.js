import {cache} from "../../menu/cache"
Page({

    /**
     * 页面的初始数据
     */
    data: {
    cartList : [],//购物车数据 
    },
    /**
     * 添加商品数据
     */
    getCartList() {
      const carts = wx.getStorageSync(cache.CARTS)
      console.log("ccc", carts)
      this.setData({
        cartList: carts
      })
    },
        /**
     * 点击减号数量加一
     */
    handleIncrement(e){
    const index = e.currentTarget.dataset.index
    console.log(e);
    this.data.cartList[index].num += 1
    this.setData({
      cartList : this.data.cartList
    })
    wx.setStorageSync(cache.CARTS, this.data.cartList)
    },
    /**
     * 点击加号数量减一
     */
    handleDecrement(e){
    const index = e.currentTarget.dataset.index
    const num = this.data.cartList[index].num
     const itemStatus = this.removeCartItem(num,index)
     if(itemStatus) return
      this.data.cartList[index].num -= 1
      this.setData({
        cartList : this.data.cartList
      })
      wx.setStorageSync(cache.CARTS, this.data.cartList)
    },
    /**
     * 当数据减到0时 弹出提示框 是否删除该数据
     */
    removeCartItem(num,index){
    if(num === 1){
      wx.showModal({
        content: '您确定要删除此商品吗?',
        success: (res) => {
           if(res.confirm){
             this.data.cartList.splice(index,1)
             this.setData({
               cartList : this.data.cartList
             })
             wx.setStorageSync(cache.CARTS, this.data.cartList)
           }else if (res.sancel){
             console.log('用户点击取消');
           }
        }
      })
      return true
      } 
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    this.getCartList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})