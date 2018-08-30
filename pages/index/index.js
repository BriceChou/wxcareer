// index.js
const app = getApp()

Page({
  data: {
    swiperCl: ['../images/classify/ad2.jpg'],
    swiperRe: ['../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg'],
    choiceIcon1: [
      {
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '经典必听',
      navUrl: '',
      backgroundColor:'#f09eae'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '每日必听',
      navUrl: '',
      backgroundColor:'#ff9494'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: 'VIP会员',
      navUrl: '',
      backgroundColor:'#e9d585'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: 'VIP会员',
      navUrl: '',
      backgroundColor: '#e9d585'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: 'VIP会员',
      navUrl: '',
      backgroundColor: '#e9d585'
    }],
    choiceIcon2: [
      {
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '直播微课',
      navUrl: '',
      backgroundColor:'#aeee52'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '边听边看',
      navUrl: '',
      backgroundColor:'#85aff0'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '大师课',
      navUrl: '',
      backgroundColor:'#f0a887'
    }],
    choiceIcon3: [
      {
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '直播微课',
      navUrl: '',
      backgroundColor:'#aeee52'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: 'VIP会员',
      navUrl: '',
      backgroundColor:'#e9d585'
    }],
    guessImg: [{
      navUrl: '',
      title: '我的世界我的面试',
      url: ' '
    },{
      navUrl: '',
      title: '冲破社会的大笼',
      url: ' '
    },{
      navUrl: '',
      title: '学校我们该怎么做？',
      url: ' '
    }],
    navLeft: 15,
    current: 0,
    navArr: [15, 345, 675]
  },

  onLoad: function () {
    
  },
  handletouchtart: function(e) {
    console.log(e.touches[0].pageX + 'has been clicked.');
  },
  handletouchmove: function(e) {

  },
  handleChange:function (e) {
    var index = e.currentTarget.dataset.index;
      this.setData({
        navLeft: this.data.navArr[index-1],
        current: index-1
      })
  },
  pageChange: function(e) {
    this.setData({
      navLeft:this.data.navArr[e.detail.current]
    })
  }

})