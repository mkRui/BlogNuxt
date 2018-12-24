import axios from '../axios'

// 获取留言墙信息
export function getLeaveMessage (params) {
  return axios.get('/leaveWell/allLeaveList', { params })
  .then(res => res.data)
  .catch(e => console.error(e))
}