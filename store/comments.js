import { comments } from '@/api/index'
import marked from '@/plugins/marked.js'

export const state = () => ({
  commentsList: [],
  pageNo: 1,
  total: 1
})

export const actions = {
  // 获取文章列表
  async getCommentsList ({ commit }, param) {
    const res = await comments.getComments(param)
    if (res && res.code === 1) {
      if (param.pageNo === 1) {
        commit('GET_COMMENTS_LIST', res.result)
      } else [
        commit('GET_COMMENTS_PUSH_LIST', res.result)
      ]
    } else {
      return res
    }
  },
  // 获取文章第二级评论
  async getCommentsChild ({ commit }, param) {
    const res = await comments.getComments(param)
    if (res && res.code === 1) {
      commit('GET_COMMENTS_CHILD', res.result)
    } else {
      return res
    }
  }
}

export const mutations = {
  GET_COMMENTS_LIST (state, item) {
    console.log(marked('```console.log(1)```'))
    state.commentsList = item.list.map(item => {
      return {
        ...item,
        commentsContent: marked(item.commentsContent),
        child: []
      }
    })
    state.pageNo = item.pageNo
    state.total = item.totalCount
  },
  GET_COMMENTS_PUSH_LIST (state, item) {
    state.commentsList.push(item.list.map(item => {
      return {
        ...item,
        commentsContent: marked(item.commentsContent),
        child: []
      }
    }))
    state.pageNo = item.pageNo
    state.total = item.totalCount
  },
  GET_COMMENTS_CHILD (state, item) {
    const id = item.list[0].parentId
    for (const elem of state.articleList) {
      if (elem.id === id) {
        elem.child.push(item.list.map(item => {
          return {
            ...item,
            commentsContent: marked(item.commentsContent)
          }
        }))
      }
    }
  }
}