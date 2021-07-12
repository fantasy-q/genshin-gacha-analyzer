import { createStore } from "vuex";

export default createStore({
  state: {
    toMerge: false,
  },
  mutations: {
    TO_MERGE: (state) => { state.toMerge = true },
  },
  actions: {
    toMerge: ({ commit }) => { commit('TO_MERGE') },
  },
  modules: {},
});
