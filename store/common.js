import { common } from '@/api/index'

export const state = () => ({
  classify: []
})

export const actions = {
  async getClassify ({ commit }, param) {
    const res = await common.getAllTag(param)
    if (res && res.code === 1) {
      console.log(res)
      commit('GET_CLASSIFY', res.result)
    } else {
      return res
    }
  }
}

export const mutations = {
  GET_CLASSIFY (state, item) {
    state.classify = item.list
  }
}