import axios from '../axios'

export function getComments (params) {
  return axios.get('/comments/getCommentsArticle', { params })
  .then(res => res.data)
  .catch(e => console.error(e))
}