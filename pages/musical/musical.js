// pages/musical/musical.js
import {
  getAllsinger,
} from '../../api/musical'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    singerList: [],
    alphabet: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let res1 = await getAllsinger(-1)
    this.setData({
      singerList: res1.data.artists
    })
    let arr = ['热']
    for (let i = 0; i < 26; i++) {
      //  console.log(String.fromCharCode((65+i)));
      arr.push(String.fromCharCode((65 + i)))
    }
    this.setData({
      alphabet: arr
    })
  },
  async show(e) {
    let initial = e.target.dataset.con
    if (initial == "热") {
      initial = -1
      let res2 = await getAllsinger(initial)
      this.setData({
        singerList: res2.data.artists
      })
    } else {
      initial = initial.toLowerCase()
      let res2 = await getAllsinger(initial)
      console.log(res2);
      this.setData({
        singerList: res2.data.artists
      })
    }
  },
  gotodetail(e) {
    console.log(e.currentTarget.dataset.id);
    let singerid = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/singerdetail/singerdetail?singerid=${singerid}`,
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