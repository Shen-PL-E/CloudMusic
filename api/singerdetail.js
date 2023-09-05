import request from "../utils/request"

let singerdetail=(id)=>request(`/artist/top/song?id=${id}`)



export {
  singerdetail,
}