import axios from '../axios'

// 获取留言墙信息
export function getLeaveMessage (params) {
  return axios.get('/leaveWell/allLeaveList', { params })
  .then(res => res.data)
  .catch(e => console.error(e))
}

// 增加留言信息
export function addLeaveMessage (params) {
  return axios.post('/leaveWell/addLeave', params)
  .then(res => res.data)
  .catch(e => console.error(e))
}