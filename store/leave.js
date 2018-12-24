import { leave } from '@/api/index'

export const state = () => ({
  leaveList: [],
  pageNo: 1,
  total: 1
})

export const actions = {
  async getLeaveMessage ({ commit }, param) {
    const res = await leave.getLeaveMessage(param)
    if (res && res.code === 1) {
      commit('GET_LEAVE_MESSAGE', res.result)
    }
  }
}

export const mutations = {
  GET_LEAVE_MESSAGE (state, item) {
    state.leaveList = item.list
    state.pageNo = item.pageNo
    state.total = item.totalCount
  }
}

