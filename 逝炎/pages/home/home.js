//getApp()获取App()产生的事例对象
const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

const globalData = app.globalData
console.log(globalData)


//调用page()这个方法称之为注册一个页面
Page({
  data: {
    name: '逝炎',
    age: 18,
    ins: null,
    city: '',
    students: [{
        name: '张三',
        number: '02356894656',
        gender: '男',
        age: '18'
      },
      {
        name: '张二',
        number: '02412365586',
        gender: '女',
        age: '23'
      },
      {
        name: '王八',
        number: '05698451231',
        gender: '男',
        age: '22'
      },
      {
        name: '王一',
        number: '07845659854',
        gender: '女',
        age: '28'
      },
      {
        name: '刘棍',
        number: '01223664464',
        gender: '男',
        age: '15'
      },
      {
        name: '李旺',
        number: '78889945544',
        gender: '男',
        age: '30'
      }
    ],
    counter: 0
  },
  ins: function (e) {
    this.setData({
      ins: e.detail.value
    })
    console.log(e.detail.value)
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?location=' + e.detail.value + '&key=a0344df8dbef49c989497dd1a9d35f18',
      success: (res) => {
        console.log(res)
      }
    })
  },
  //获取用户的信息
  handleGetUserInfo(event) { //当用户点击的时候就会产生一个event事件对象
    console.log(JSON.parse(event.detail.rawData).city)
    this.setData({
      city: JSON.parse(event.detail.rawData).city
    })
  },
  jiaclick() {
    //1.错误做法：界面是不会刷新的,wxml页面无法监听到counter的变化
    //this.data.counter +=1
    //console.log(this)



    // 一般setData方法多用于点击后改变页面信息或者刷新后与后台交互获取最新的信息

    // 注意：
    // 1.直接修改 this.data而不调用this.setData 是无法改变页面的状态的，还会造成数据不一致
    // 2.单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
    //需要调用setData()函数来设置counter的值
    this.setData({
      counter: this.data.counter + 1 //点击button按钮进行加一
    })
  },
  jianclick() {
    this.setData({
      counter: this.data.counter - 1 //点击button按钮进行减一
    })
  },
  //页面被加载出来的时候执行此函数
  onLoad() {
    

  },
  //页面显示出来的时候执行此函数
  onShow() {
    console.log('onShow')
  },
  //页面初次渲染完成执行此函数，之后渲染就不会再执行了
  onReady() {

  }
})
// mvvm把命令式变成变成了声明式编程
//小程序里面的view-model里面有一个mina框架
//编程范式：
// 1.命令式编程：原生操作DOM,每执行一步需要写一步的命令
// 2.声明式编程：Vue/React/Angular



//sitemap.json是做检索的

// "window": {
//   "backgroundTextStyle": "light",//下拉刷新点的样式，只能是light和drak
//   "navigationBarBackgroundColor": "#fff",//只能写以#号开头十六进制的颜色
//   "navigationBarTitleText": "WeChat",//小程序标题
//   "navigationBarTextStyle": "black",//只能写white和black
//   "backgroundColor": "#b0b0b0",//下拉刷新的颜色
//   "enablePullDownRefresh": true,//true允许下拉刷新,flase不允许下拉刷新
//   },