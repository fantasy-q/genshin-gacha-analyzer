const state = {
  loadFile: null,
  mergefiles: [],
}

let nextId = 1

const mutations = {
  LOAD: (state, file) => { state.loadFile = file },
  UPDATE: (state, filelist) => {
    for (const file of filelist) {
      file.id = nextId++
      state.mergefiles.push(file)
    }
    // state.mergefiles.push(...filelist)
  },
  DELETE: (state, fileToDel) => {
    state.mergefiles = state.mergefiles.filter(file => file !== fileToDel)
    // console.log(getters.files);
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
