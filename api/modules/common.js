import axios from '../axios'

//  获取标签&分类
export function getAllTag (params) {
  return axios.get('/tagControl/allTagPage', { params })
  .then((res) => res.data)
  .catch((e) => console.error(e))
}
