import { global } from '@/api/index'

export const state = () => ({
  global: {}
})

export const actions = {
  async getGlobal ({ commit }, param) {
    const res = await global.getGlobal(param)
    if (res && res.code === 1) {
      commit('GET_GLOBAL', res.result)
    }
  }
}

export const mutations = {
  GET_GLOBAL (state, item) {
    state.global = item
  }
}