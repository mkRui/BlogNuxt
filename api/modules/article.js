// 文章列表
import axios from '../axios'

export function articleList (params) {
  return axios.get('/article/articlePage', { params })
  .then((res) => res.data)
  .catch((e) => console.error(e))
}

export function articleDetail (params) {
  return axios.get('/article/articleDetail', { params })
  .then((res) => res.data)
  .catch((e) => console.error(e))
}

export function getHotArticle (params) {
  return axios.get('/article/getHotArticle', { params })
  .then((res) => res.data)
  .catch((e) => console.error(e))
}

// 文章阅读量增加
export function readArticle (params) {
  return axios.post('/article/readArticle', params)
  .then((res) => res.data)
  .catch((e) => console.error(e))
}

// 文章点赞
export function praiseArticle (params) {
  return axios.post('/article/praiseArticle', params)
  .then((res) => res.data)
  .catch((e) => console.error(e))
}

// 文章归档
export function articleArchive (params) {
  return axios.get('/article/articleArchive')
  .then((res) => res.data)
  .catch((e) => console.error(e))
}