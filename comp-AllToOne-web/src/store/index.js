import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 9527,
    };
  },
  mutations: {
    add(state, n) {
      state.count += n;
    },
  },
  actions: {
    add({ commit }, n) {
      commit('add', n);
    },
  },
});

export default store;
