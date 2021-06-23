import Vue from 'vue'
import Vuex from 'vuex'
import * as file from '@/store/file'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    file,
  },
  state: {
    toMerge: false,
  },
  mutations: {
    TO_MERGE: (state) => { state.toMerge = true },
  },
  actions: {
    toMerge: ({ commit }) => { commit('TO_MERGE') },
  },
})
