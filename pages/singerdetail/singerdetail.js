// pages/singerdetail/singerdetail.js
import {
  singerdetail
} from '../../api/singerdetail'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songslist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(options);
    let res = await singerdetail(options.singerid)
    console.log(res.data);
    this.setData({
      songslist: res.data.songs
    })
  },
  gotoplay(e) {
    let item = e.currentTarget.dataset.item
    console.log(item);
    let jsonstr=encodeURIComponent(JSON.stringify(item))
    wx.reLaunch({
      url: `/pages/playing/playing?item=${jsonstr}`,
    })
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