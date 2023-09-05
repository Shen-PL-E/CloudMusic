// 二次封装
import request from "../utils/request"
// 获取轮播图
let getbanner=()=>request("banner?type",'get')
// 获取热门榜单列表
let gethot=()=>request('/toplist/detail','get')
// 获取热门mv
let getmv=(offset)=>request(`/top/mv?limit=10&offset=${offset}`,'get')
export  {
  getbanner,
  gethot,
  getmv
}


