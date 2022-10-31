// pages/shopping/shopping.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
     advterList:[],//存放轮播图数据
    },
    /**
     * 轮播图
     */
    getAdvterList(){
        // mock轮播图数据
        const data = [
            {
                id:1,
                link:'',
                imgUrl:'https://huaxinwendeng.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020lLJK0jy89y1586333534.jpg?x-oss-process=image/resize,w_1920,h_575'
            },{
                id:2,
                link:'',
                imgUrl:'https://huaxinwendeng.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020t2vrszZ5ib1586332927.jpg?x-oss-process=image/resize,w_1920,h_575'
            },{
                id:3,
                link:'',
                imgUrl:'https://huaxinwendeng.oss-cn-hangzhou.aliyuncs.com/uploads/image/2020d4n2XkWbQ41586332943.jpg?x-oss-process=image/resize,w_1920,h_575'
            }
        ]
        this.setData({
            advterList : data
        })
    },
    /**
     * 点击扫描条形码跳转
     */
    handleSancode(){
   console.log(234);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    this.getAdvterList()
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