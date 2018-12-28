// pages/usercenter/usercenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    userName:""

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console(res.userInfo)
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  userNameInput:function(e){
    var that = this;
    that.setData({
      userName:e.detail.value
    })
  },
  getSite:function(){
    var that=this;
    var nameParam=that.data.userName;

    wx.request({
      url: 'http://10.11.229.144/Library.do',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },

      method: "GET",
      data: {
        name: nameParam
      },

      success: function (res) {
        var sch = res.data;
        
        wx.showModal({
          title: '提示',
          content:sch,
          showCancel: false,
          confirmText: "确定",
          // confirmColor: "#0f0",
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
       
      }

    })




    

  }


})