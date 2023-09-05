// pages/mvdetail/mvdetail.js
import {
  getmvurl,
  getmvdetail
} from '../../api/mvdetail'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvurl: '',
    mvname: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log(options.mvid);
    let id = {
      id: options.mvid
    }
    let mvid = {
      mvid: options.mvid
    }
    console.log(id);
    let res1 = await getmvurl(id)
    this.setData({
      mvurl: res1.data.data.url
    })
    let res2 = await getmvdetail(mvid)
    console.log(res2.data.data.name);
    this.setData({
      mvname:res2.data.data.name
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