const state = {
  loadFile: null,
  mergefiles: [],
}
const mutations = {
  LOAD: (state, file) => { state.loadFile = file },
  UPDATE: (state, filelist) => { state.mergefiles.push(...filelist) },
  DELETE: (state, file) => {
    state.mergefiles = state.mergefiles.filter(v => v !== file)
  }
}
const actions = {
  load: ({ commit }, file) => { commit('LOAD', file) },
  update: ({ commit }, filelist) => { commit('UPDATE', filelist) },
  delete: ({ commit }, file) => { commit('DELETE', file) }
}
const getters = {
  file: state => state.loadFile,
  files: state => state.mergefiles
}

export { state, mutations, actions, getters }