// pages/usercenter/usercenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  formSubmit: function(e) {
    if (e.detail.value.ID.length == 0 || e.detail.value.password.length == 0) {
      wx.showToast({
        title: '输入不能为空',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function() {
        wx.hideToast()
      }, 3000)
    } 
    else if (e.detail.value.ID.length != 10) {
      wx.showToast({
        title: '请输入10位学号!',
        icon: 'loading',
        duration: 1500
      })

      setTimeout(function() {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.password.length < 6 || e.detail.value.password.length > 20) {

      wx.showToast({
        title: '请输入6-20密码!',
        icon: 'loading',
        duration: 1500
      })

      setTimeout(function() {
        wx.hideToast()
      }, 2000)

    } else {

      wx.request({
        url: '#',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },

        method: "POST",
        data: {
          ID: e.detail.value.ID,
          password: e.detail.value.password
        },

        success: function(res) {

          if (res.data.status == 0) {

            wx.showToast({
              title: res.data.info,
              icon: 'loading',
              duration: 1500
            })

          } else {

            wx.showToast({
              title: res.data.info, //这里打印出登录成功
              icon: 'success',
              duration: 1000
            })

          }

        }

      })

    }

  }
})