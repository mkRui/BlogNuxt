export const state = () => ({
  bodyState: false,
  isMobile: false,
  search: false
})

export const actions = {
  nuxtServerInit ({commit}, {req}) {
    const state = /Android|ipad|webOS|iPhone|iPod|BlackBerry/i.test(req.headers['user-agent'])
    commit('NUXT_SERVICE_INIT', state)
  },
  bodyState ({commit}, param) {
    commit('BODY_STATE', param)
  },
  search ({commit}, param) {
    commit('SEARCH', param)
  }
}

export const mutations = {
  BODY_STATE (state, item) {
    state.bodyState = item
  },
  NUXT_SERVICE_INIT (state, item) {
    state.isMobile = item
  },
  SEARCH (state, item) {
    state.search = item
  }
}