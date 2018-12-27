import { leave } from '@/api/index'
import marked from '@/plugins/marked.js'


export const state = () => ({
  leaveList: [],
  pageNo: 1,
  total: 1
})

export const actions = {
  // 获取留言
  async getLeaveMessage ({ commit }, param) {
    const res = await leave.getLeaveMessage(param)
    if (res && res.code === 1) {
      commit('GET_LEAVE_MESSAGE', res.result)
    }
  },
  // 增加留言
  async addLeaveMessage ({ commit }, param) {
    const res = await leave.addLeaveMessage(param)
    if (res && res.code === 1) {
      commit('ADD_LEAVE_MESSAGE', param)
    } else {
      return res
    }
  },
  async moveLeave ({commit, state}, param) {
    if (state.total > state.leaveList.length) {
      let pageNo = state.pageNo + 1
      const res = await leave.getLeaveMessage({
        pageNo: pageNo,
        pageSize: 20
      })
      if (res && res.code === 1) {
        commit('MOVE_LEAVE', res.result)
      }
    }
  }
}

export const mutations = {
  GET_LEAVE_MESSAGE (state, item) {
    state.leaveList = item.list.map(elem => {
      return {
        ...elem,
        leaveContent: marked(elem.leaveContent)
      }
    })
    state.pageNo = item.pageNo
    state.total = item.totalCount
  },
  ADD_LEAVE_MESSAGE (state, item) {
    state.leaveList.unshift({
      leaveTime: new Date().toLocaleDateString().split('/').join('-'),
      leaveTitle: item.title,
      leaveUser: item.name,
      leaveContent: marked(item.content)
    })
  },
  MOVE_LEAVE (state, item) {
    state.leaveList.push(...item.list.map(elem => {
      return {
        ...elem,
        leaveContent: marked(elem.leaveContent)
      }
    }))
    state.pageNo = item.pageNo
    state.total = item.totalCount
  }
}

