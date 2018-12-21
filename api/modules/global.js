import axios from '../axios'

// 获取所有的作者页面内容
export function getGlobal (params) {
  return axios.get('/global/detailGlobal', { params })
  .then(res => res.data)
  .catch(e => console.error(e))
}
