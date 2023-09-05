// pages/playing/playing.js
import {
  getsong
} from "../../api/playing"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: '',
    singer: '',
    bg: '',
    img: '',
    startime: '00:00',
    endtime: '00:00'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let str = decodeURIComponent(options.item)
    console.log(JSON.parse(str));
    let item = JSON.parse(str)
    // console.log(options.item);
    let res = await getsong(item.id)
    console.log(res.data.data);
    let url = res.data.data[0].url
    this.setData({
      tit: item.name,
      singer: item.ar[0].name,
      img:item.al.picUrl,
      bg:item.al.picUrl
    })
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = item.name
    backgroundAudioManager.epname = item.name
    backgroundAudioManager.singer = item.ar[0].name
    backgroundAudioManager.coverImgUrl = item.al.picUrl
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = url

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})