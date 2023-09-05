import request from "../utils/request"
// mv详情 /mv/detail
let getmvdetail=(mvid)=>request('mv/detail','get',mvid)
// 获取mv播放地址
let getmvurl=(mvid)=>request('mv/url','get',mvid)

export {
  getmvurl,
  getmvdetail
}