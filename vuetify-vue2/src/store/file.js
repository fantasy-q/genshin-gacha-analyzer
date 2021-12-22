const state = {
  loadFile: null,
  mergefiles: [],
}

let nextID = 1

const mutations = {
  LOAD: (state, file) => { state.loadFile = file },
  UPDATE: (state, item) => {
    item.id = nextID++
    state.mergefiles.push(item)
  },
  DELETE: (state, id) => {
    state.mergefiles = state.mergefiles.filter(item => item.id !== id)
  },
}

const actions = {
  load: ({ commit }, file) => { commit('LOAD', file) },
  update: ({ commit }, item) => { commit('UPDATE', item) },
  delete: ({ commit }, id) => { commit('DELETE', id) },
}

const getters = {
  file: state => state.loadFile,
  files: state => state.mergefiles,
}

export { state, mutations, actions, getters }
