//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dateArray: [{ name: "星期1" }, { name: "星期2" }, { name: "星期3" }, { name: "星期4" }, { name: "星期5" }],
    zhihu:{},
    motto: 'Hello World',
    test1: [{
      "data":"1-1",
      "name": "软件工程",
      "time": " (1-2节)1-17周(单)",
      "place": " 沙河校区 学院楼7号楼217M"},
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
        "name": "计算机网络课程设计",
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
      },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转
jumpBtn:function(options){
wx.navigateTo({
  url: '../lptest/lptest',
})
},

  onLoad: function () {
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }


      
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
