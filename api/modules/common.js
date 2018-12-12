import axios from '../axios'

//  获取标签&分类
export function getAllTag (params) {
  return axios.get('/tagControl/allTagPage', { params })
  .then((res) => res.data)
  .catch((e) => console.error(e))
}

// 获取热门标签
export function getHotTag (params) {
  return axios.get('/panel/getHotTag', { params })
  .then((res) => res.data)
  .catch((e) => console.error(e))
}
