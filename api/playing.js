import request from "../utils/request"
// /song/url
let getsong=(id)=>request(`song/url?id=${id}`)

export{
  getsong
}

