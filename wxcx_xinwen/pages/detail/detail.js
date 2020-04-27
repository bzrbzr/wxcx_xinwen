// pages/detail/detail.js
var util = require('../../utils/util.js')

Page({
  data: {
    article:
      {
     },
     isadd:{}
  },

  cancelfavor:function() {
    let article = this.data.article
    wx.removeStorageSync('article.id')
    this.setData({
      isadd:false
    })
  },

  addfavor:function(){
    let article = this.data.article
    wx.setStorageSync('article.id', article)
    this.setData({
      isadd:true
    })
  },

  onLoad: function (options){
    console.log(options)

  let id = options.id

  // let list = util.getnewsdetail(options.id)
  // if(list.code == '200')
  // {
  //   this.setData({
  //     article : list.news
  //   })
  // }
  console.log(id)
  var newarticle = wx.getStorageSync(id)
  console.log(newarticle)
  if(newarticle != '')
  {
    console.log('true')
    this.setData({
       isadd : true,
      article:newarticle
    })
  }
  else{
    let list = util.getnewsdetail(id)
    if(list.code == '200')
    {
      console.log('false')
      this.setData({
         isadd : false,
        article : list.news
      })
    }
  }
  }
})
