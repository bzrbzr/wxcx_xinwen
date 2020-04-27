const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
 

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const news=[
  {id:'123',
  title:'哈哈哈哈哈',
  poster:'/images/chongzhi.png',
  content:'1hgjfghjfghjfghjfghjfghjhj啊手动阀打发打发手动阀手动阀打发打法的啊手动阀打发手动阀手动阀',
  data:'2020-4-22'
},
{id:'124',
title:'嘿嘿嘿嘿嘿',
poster:'/images/shumadianqi.png',
content:'2sdfgsdgsfdgsfdgsdfgsdfgsdfg啊手动阀打发打发手动阀手动阀打发打法的啊手动阀打发手动阀手动阀',
data:'2020-4-22'
},
{id:'125',
title:'啦啦啦啦啦',
poster:'/images/wuliu.png',
content:'3asdfasdfadf啊手动阀打发fhgjfhgjfghjfhgjfgh打发手动阀手动阀打发打法的啊手动阀打发手动阀手动阀',
data:'2020-4-22'
}
]

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function getnewslist(){
  let list=[];
  for(var i=0 ;i < news.length;i++)
  {
    let obj = {};
    obj.id = news[i].id;
    obj.title = news[i].title;
    obj.poster = news[i].poster;
    obj.content = news[i].content;
    obj.data = news[i].data;
    list.push(obj);
  }
  return list;
}

function getnewsdetail(id){
  let message = {
    code:'404',
    news:{}
  }
  for(var i = 0; i < news.length; i++){
    if(id == news[i].id){
      message.code = '200',
      message.news = news[i];
      break;
    }
  }
  return message;
}

module.exports ={
  getnewslist:getnewslist,
  getnewsdetail:getnewsdetail
}
