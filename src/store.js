import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadFile: null,
    mergefiles: null,
    toMerge: false,
  },
  mutations: {
    LOAD_FILE(state, payload) {
      state.loadFile = payload
    },
    UPDATE_FILES(state, payload) {
      state.mergefiles = Array.from(payload)
    },
    APPEND_FILES(state, payload) {
      state.mergefiles = state.files.concat(Array.from(payload))
    },
    TO_MERGE(state) {
      state.toMerge = true
    }
  },
  actions: {
    loadFile({ commit }, payload) {
      commit('LOAD_FILE', payload)
    },
    updateFiles({ commit }, payload) {
      commit('UPDATE_FILES', payload)
    },
    appendFiles({ commit }, payload) {
      commit('APPEND_FILES', payload)
    },
    toMerge({ commit }) {
      commit('TO_MERGE')
    }
  },
  getters: {
    file: state => state.loadFile,
    files: state => state.mergefiles,
    filesLength: state => state.mergefiles.length
  }
})
