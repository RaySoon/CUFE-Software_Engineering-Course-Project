// miniprogram/pages/lptest/lptest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateArray: [{ name: "星期1" }, { name: "星期2" }, { name: "星期3" }, { name: "星期4" }, { name: "星期5" }],
    zhihu: {},
    sch_listData:[{
      "time_title": "一二节", "Mon_text": [{
        "data": "1-1",
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      }], "Tues_text": [{
        "data": "1-1",
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      }], "Wed_text": [{
        "data": "1-1",
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      }], "Thur_text": [{
        "data": "1-1",
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      }], "Fri_text": [{
        "data": "1-1",
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      }]
      },
      {
        "time_title": "三四节", "Mon_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Tues_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Wed_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Thur_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Fri_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }]
      },
      {
        "time_title": "五六节", "Mon_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Tues_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Wed_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Thur_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Fri_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }]
      },
      {
        "time_title": "七八节", "Mon_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Tues_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Wed_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Thur_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Fri_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }]
      },
      {
        "time_title": "晚上", "Mon_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Tues_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Wed_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Thur_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }], "Fri_text": [{
          "data": "1-1",
          "name": "软件工程",
          "time": " (1-2节)1-17周(单)",
          "place": " 沙河校区 学院楼7号楼217M"
        }]
      }
     ],
    motto: 'Hello World',
    test1: [{
      "data": "1-1",
      "name": "软件工程",
      "time": " (1-2节)1-17周(单)",
      "place": " 沙河校区 学院楼7号楼217M"
    },
    {
      "data": "1-1",
      "name": "软件工程",
      "time": " (1-2节)1-17周(单)",
      "place": " 沙河校区 学院楼7号楼217M"
    }
    ],
    testKebiao: {
      "1-1": {
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "2-1": {
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "3-1": {
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "4-1": {
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "5-1": {
        "name": "软件工程",
        "time": " (1-2节)1-17周(单)",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "1-3": {
        "name": "软件工程",
        "time": " (3-4节)1-5周,7-17周(单),18周",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "1-3": {
        "name": "软件工程",
        "time": " (3-4节)1-5周,7-17周(单),18周",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "2-3": {
        "name": "软件工程",
        "time": " (3-4节)1-5周,7-17周(单),18周",
        "place": " 沙河校区 学院楼7号楼217M"
      },
      "3-3": {
        "name": "会计学基础",
        "time": " (3-4节)1-18周",
        "place": " 沙河校区 沙河主教407M"
      },
      "4-3": {
        "name": "数据挖掘技术",
        "time": " (3-4节)1-7周",
        "place": " 沙河校区 学院楼3号楼321M"
      },
      "5-3": {
        "name": "会计学基础",
        "time": " (3-4节)1-17周(单)",
        "place": " 沙河校区 沙河主教403M"
      },
      "1-5": {
        "name": "运筹学",
        "time": " (5-6节)1-18周",
        "place": " 沙河校区 沙河主教102M"
      },
      "2-5": {
        "name": "计算机网络课程设计",
        "time": " (5-6节)1-9周",
        "place": " 沙河校区 学院楼6号楼303实验室"
      },
      "3-5": {
        "name": "计算机网络课程设计",
        "time": " (5-6节)1-9周",
        "place": " 沙河校区 学院楼6号楼303实验室"
      },
      "4-5": {
        "name": "信息组织与检索",
        "time": " (5-6节)1-18周",
        "place": " 沙河校区 沙河主教407M"
      },
      "5-5": {
        "name": "运筹学",
        "time": " (5-6节)1-17周(单)",
        "place": " 沙河校区 沙河主教102M"
      },
      "1-7": {
        "name": "毛泽东思想和中国特色社会主义理论体系概论（2）",
        "time": " (7-8节)1-3周(单),4-10周,14-18周",
        "place": " 沙河校区 学院楼7号楼115M"
      },
      "2-7": {
        "name": "计算机网络课程设计",
        "time": " (5-6节)1-9周",
        "place": " 沙河校区 学院楼6号楼303实验室"
      },
      "3-7": {
        "name": "计算机网络课程设计",
        "time": " (5-6节)1-9周",
        "place": " 沙河校区 学院楼6号楼303实验室"
      },
      "4-7": {
        "name": "计算机网络课程设计",
        "time": " (5-6节)1-9周",
        "place": " 沙河校区 学院楼6号楼303实验室"
      },
      "5-7": {
        "name": "络课程设计",
        "time": " (5-6节)1-9周",
        "place": " 沙河校区 学院楼6号楼303实验室"
      },
      "1-9": {
        "name": "数学文化",
        "time": " (9-10节)2-7周",
        "place": " 沙河校区 沙河主教111M"
      },
      "2-9": {
        "name": "数学文化",
        "time": " (9-10节)2-7周",
        "place": " 沙河校区 沙河主教111M"
      },
      "4-9": {
        "name": "数学文化",
        "time": " (9-10节)2-7周",
        "place": " 沙河校区 沙河主教111M"
      },
      "3-9": {
        "name": "数学文化",
        "time": " (9-10节)2-7周",
        "place": " 沙河校区 沙河主教111M"
      },
      "4-9": {
        "name": "数学文化",
        "time": " (9-10节)2-7周",
        "place": " 沙河校区 沙河主教111M"
      },
      "5-9": {
        "name": "数学文化",
        "time": " (9-10节)2-7周",
        "place": " 沙河校区 沙河主教111M"
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //测试
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log('返回的code' + res.data.date)
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({


          zhihu: res.data.date,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

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