import { article } from '@/api/index'

export const state = () => ({
  articleList: [],
  pageNo: 1,
  total: 1
})

export const actions = {
  async getArticleList ({ commit }, param) {
    const res = await article.articleList(param)
    if (res && res.code === 1) {
      commit('GET_ARTICLE_LIST', res.result)
    } else {
      return res
    }
  }
}

export const mutations = {
  GET_ARTICLE_LIST (state, item) {
    state.articleList = item.list,
    state.pageNo = item.pageNo
    state.total = item.totalCount
  }
}