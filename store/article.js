import { article } from '@/api/index'

export const state = () => ({
  articleList: [],
  hotArticle: [],
  pageNo: 1,
  total: 1,
  archiveList: []
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
  },
  // 增加文章评论
  async addArticleNum ({ commit }, param) {
    commit('ADD_ARTICLE_NUM')
  },
  // 归档
  async articleArchive ({ commit }, param) {
    const res = await article.articleArchive(param)
    if (res && res.code === 1) {
      commit('ARTICLE_ARCHIVE', res.result)
    }
  },
  // 文章点赞
  async praiseArticle ({ commit }, param) {
    const res = await article.praiseArticle(param)
    if (res && res.code === 1) {
      commit('PRAISE_ARTICLE')
    }
  },
  // 文章阅读
  async readArticle ({ commit }, param) {
    await article.readArticle(param)
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
  },
  ADD_ARTICLE_NUM (state, item) {
    state.detail.comments += 1
  },
  ARTICLE_ARCHIVE (state, item) {
    state.archiveList = item
  },
  PRAISE_ARTICLE (state, item) {
    console.log(state.detail.praise)
    state.detail.praise += 1
  }
}