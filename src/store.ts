import Vue from 'vue';
import Vuex from 'vuex';
import { resolve } from 'path';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My custom title',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com',
    ],
  },
  mutations: {
    ADD_LINK(state, link) {
      state.links.push(link);
    },
    REMOVE_LINK(state, index) {
      state.links.splice(index, 1);
    },
    REMOVE_ALL(state) {
      state.links = [];
    }
  },
  getters: {
    countLinks(state): number {
      return state.links.length;
    },
  },
  actions: {
    removeLink(context, index) {
      context.commit('REMOVE_LINK', index);
    },
    addLink(context, link) {
      context.commit('ADD_LINK', link)
    },
    removeAll({commit}) {
      return new Promise((r, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL');
          r();
        }, 1500);
      });
    },
  },
});
