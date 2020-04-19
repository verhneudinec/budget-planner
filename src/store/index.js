import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import list from "./modules/list";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    list,
  },
  plugins: [createPersistedState()],
});
