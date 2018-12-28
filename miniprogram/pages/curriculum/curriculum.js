// miniprogram/pages/lptest/lptest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateArray: [{ name: "星期1" }, { name: "星期2" }, { name: "星期3" }, { name: "星期4" }, { name: "星期5" }],
    zhihu: {},

    sch_listData:{},
    // sch: [{
    //   "time_title": "一二节",
    //   "Mon_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Tues_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Wed_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Thur_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Fri_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }]
    // },
    // {
    //   "time_title": "三四节", "Mon_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Tues_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Wed_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Thur_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Fri_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }]
    // },


    // {
    //   "time_title": "五六节", "Mon_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Tues_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Wed_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Thur_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Fri_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }]
    // },
    // {
    //   "time_title": "七八节", "Mon_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Tues_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Wed_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Thur_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Fri_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }]
    // },

    // {
    //   "time_title": "晚上", "Mon_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Tues_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Wed_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Thur_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }], "Fri_text": [{
    //     "data": "1-1",
    //     "name": "软件工程",
    //     "time": " (1-2节)1-17周(单)",
    //     "place": " 沙河校区 学院楼7号楼217M"
    //   }]
    // }


    // ]

  },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //测试
    var that = this//不要漏了这句，很重要
    wx.getStorage({//获取本地缓存
      key: "kechen",
      success: function (res) {
        that.setData({
          sch_listData: res.data
        });
      },
      fail:function(){
        wx.redirectTo({
          url: '../authorization/authorization'
        })
      }
    })

  

    //测试
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

    //测试
    var that = this//不要漏了这句，很重要
    wx.getStorage({//获取本地缓存
      key: "kechen",
      success: function (res) {
        that.setData({
          sch_listData: res.data
        });
        console.log("ppppp");
        console.log(res.data);
      },
    })

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

  
   clickClass: function(e) {
    var place1 = e.currentTarget.dataset.place;

    wx.showModal({
      title: '提示',
      content: place1,
      showCancel: false,
      confirmText: "确定",
      // confirmColor: "#0f0",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },


})