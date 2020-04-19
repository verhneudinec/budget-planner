import Vue from "vue";

const listStore = {
  namespaced: true,
  state: {
    list: {},
  },
  getters: {
    GET_LIST: ({ list }) => {
      return Object.values(list);
    },
  },
  mutations: {
    ADD_ITEM(state, item) {
      Vue.set(state.list, item.id, item);
    },
    DELETE_ITEM(state, item) {
      Vue.delete(state.list, item);
    },
  },
  actions: {
    ADD_ITEM({ commit }, item) {
      const newItem = { ...item, id: String(Math.random() * 10) };
      commit("ADD_ITEM", newItem);
    },
    DELETE_ITEM({ commit }, item) {
      commit("DELETE_ITEM", item);
    },
  },
};

export default listStore;
