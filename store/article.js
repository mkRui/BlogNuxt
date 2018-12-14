import { article } from '@/api/index'

export const state = () => ({
  articleList: [],
  hotArticle: [],
  pageNo: 1,
  total: 1
})

export const actions = {
  // 获取文章列表
  async getArticleList ({ commit }, param) {
    const res = await article.articleList(param)
    if (res && res.code === 1) {
      commit('GET_ARTICLE_LIST', res.result)
    } else {
      return res
    }
  },
  // 获取热门文章
  async getHotArticle ({ commit }, param) {
    const res = await article.getHotArticle(param)
    if (res && res.code === 1) {
      commit('GET_HOT_ARTICLE', res.result)
    } else {
      return res
    }
  },
  // 获取文章详情
  async getArticleDetail ({ commit }, param) {
    const res = await article.articleDetail(param)
    if (res && res.code === 1) {
      commit('GET_ARTICLE_DETAIL', res.result)
    } else {
      return res
    }
  }
}

export const mutations = {
  GET_ARTICLE_LIST (state, item) {
    state.articleList = item.list
    state.pageNo = item.pageNo
    state.total = item.totalCount
  },
  GET_HOT_ARTICLE (state, item) {
    state.hotArticle = item.list
  },
  GET_ARTICLE_DETAIL (state, item) {
    state.detail = item
  }
}