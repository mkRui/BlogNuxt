import axios from '../axios'

// 获取评论列表
export function getComments (params) {
  return axios.get('/comments/getCommentsArticle', { params })
  .then(res => res.data)
  .catch(e => console.error(e))
}

// 评论点赞
export function commentsPraise (params) {
  return axios.post('/comments/commentsPraise', params)
  .then(res => res.data)
  .catch(e => console.error(e))
}

// 添加评论
export function addComment (params) {
  return axios.post('/comments/addComment', params)
  .then(res => res.data)
  .catch(e => console.error(e))
}