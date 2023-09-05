// 网络请求的首次封装
import baseUrl from "./base-url"
const request=(url,method,data=null)=>{
  // 如果需要token认证
  let token=wx.getStorageSync('token')
  // 显示加载中
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl+url,
      method:method,
      data:data,
      timeout:60000,
      header:{
        "content-type":"appliaction/json",
        // 把token放到请求头中
        // "Authoriation":token
      },
      success(res){
        wx.hideLoading()
        resolve(res)
      },
      fail(err){
        wx.hideLoading()
        reject(err)
      },
    })
  })


}

export default request
