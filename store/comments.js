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
  },
  // 评论点赞
  async commentsPraise ({ commit }, param) {
    const res = await comments.commentsPraise(param)
    return res
  },
  // 赞数增加
  async praise ({ commit }, param) {
    commit('PRAISE', param)
  },
  // 评论
  async addComment ({ commit }, param) {
    const res = await comments.addComment(param)
    return res
  }
}

export const mutations = {
  GET_COMMENTS_LIST (state, item) {
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
    const id = Number(item.list[0].commentsParentid)
    for (const elem of state.commentsList) {
      if (elem.id === id) {
        elem.child = item.list.map(item => {
          return {
            ...item,
            commentsContent: marked(item.commentsContent)
          }
        })
        elem.commentsNum = item.totalCount
      }
    }
  },
  PRAISE (state, item) {
    for (const commentsItem of state.commentsList) {
      if (commentsItem.id === item) {
        commentsItem.commentsPraise += 1
        return
      }
      for (const commentsChild of commentsItem.child) {
        if (commentsChild.id === item) {
          commentsChild.commentsPraise += 1
          return
        }
      }
    }
  } 
}