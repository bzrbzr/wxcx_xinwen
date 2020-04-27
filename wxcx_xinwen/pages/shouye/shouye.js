// pages/shouye/shouye.js
var util = require('../../utils/util.js')
// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {
//     swiperimage:[
//       {src:'/images/timg.jpg'},
//       {src:'/images/timg1.jpg'},
//       {src:'/images/timg2.jpg'}
//     ],
//     newslist:[
//     //   {id:'123',
//     //     title:'哈哈哈哈哈',
//     //     poster:'/images/chongzhi.png',
//     //     data:'2020-4-22'
//     //  },
//     //   {id:'124',
//     //   title:'嘿嘿嘿嘿嘿',
//     //   poster:'/images/shumadianqi.png',
//     //   data:'2020-4-22'
//     // },
//     //   {id:'125',
//     //   title:'啦啦啦啦啦',
//     //   poster:'/images/wuliu.png',
//     //   data:'2020-4-22'
//     //  }
//     ]
//   },

 
//   /**
//    * 组件的方法列表
//    */
//   methods: {
//   }
// })
Page({
  data: {
    swiperimage:[
      {src:'/images/timg.jpg'},
      {src:'/images/timg1.jpg'},
      {src:'/images/timg2.jpg'}
    ],
    newslist:[
    //   {id:'123',
    //     title:'哈哈哈哈哈',
    //     poster:'/images/chongzhi.png',
    //     data:'2020-4-22'
    //  },
    //   {id:'124',
    //   title:'嘿嘿嘿嘿嘿',
    //   poster:'/images/shumadianqi.png',
    //   data:'2020-4-22'
    // },
    //   {id:'125',
    //   title:'啦啦啦啦啦',
    //   poster:'/images/wuliu.png',
    //   data:'2020-4-22'
    //  }
    ]
  },
  gotogetail:function(e){
     let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },
  onLoad: function (options) {
    // console.log(newslist)
  let list = util.getnewslist()
  this.setData({
    newslist : list
  })
  // console.log(newslist)
  } 
})