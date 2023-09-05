// index.js
// 获取应用实例
import {
  getbanner,
  gethot,
  getmv
} from "../../api/index"
const app = getApp()

Page({
  data: {
    bannerList:[],
    hotList:[],
    mvList:[],
    offset:1
  },
  async onLoad() {
    // 获取轮播
    let res1=await getbanner()
    this.setData({
      bannerList:res1.data.banners
    })
    // 获取热门榜单
    let res2=await gethot()
    let res2list=res2.data.list.splice(0,4)
    this.setData({
      hotList:res2list
    })
    console.log(this.data.hotList);
    // 获取热门mv
    let res3=await getmv(this.data.offset)
    console.log(res3);
    this.setData({
      mvList:res3.data.data
    })
  },
  async onReachBottom(){
    let newoff=this.data.offset+10
    if (newoff<50) {
      this.setData({
      offset:newoff
    })
    let res=await getmv(this.data.offset)
    let newmvList=[...this.data.mvList,...res.data.data]
    this.setData({
      mvList:newmvList
    })
    }else{
      console.log('没了');
    }
    
  }
})