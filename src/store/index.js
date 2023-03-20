import { createStore } from 'vuex'

const store = createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    }
  },
  getters: {
    getToken(state) {
      return state.token
    }
  }
})

export default store
