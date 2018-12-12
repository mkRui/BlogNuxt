import { common } from '@/api/index'

export const state = () => ({
  classify: [],
  hotTag: []
})

export const actions = {
  // 获取分类
  async getClassify ({ commit }, param) {
    const res = await common.getAllTag(param)
    if (res && res.code === 1) {
      commit('GET_CLASSIFY', res.result)
    } else {
      return res
    }
  },
  // 获取热门标签
  async getHotTag ({ commit }, param) {
    const res = await common.getHotTag(param)
    if (res && res.code === 1) {
      commit('GET_HOT_TAG', res.result)
    } else {
      return res
    }
  }
}

export const mutations = {
  GET_CLASSIFY (state, item) {
    state.classify = item.list
  },
  GET_HOT_TAG (state, item) {
    state.hotTag = item
  }
}