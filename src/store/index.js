import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    login (state, name) {
      state.name = name
    },
    logout (state) {
      state.name = ''
    }
  },
  getters: {
    getName (state) {
      return state.name
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
