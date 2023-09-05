import request from "../utils/request"
// 获取全部歌手
let getAllsinger=(initial)=>request(`/artist/list?type=-1&area=-1&initial=${initial}`,'get')

export {
  getAllsinger,
}
