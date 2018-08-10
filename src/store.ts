import Vue from 'vue';
import Vuex from 'vuex';
import { resolve } from 'path';

Vue.use(Vuex);

const ADD_LINKE = ['ADD_LINK'];

export default new Vuex.Store({
  state: {
    title: 'My title',
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
    },
  },
  getters: {
    countLinks(state): number {
      return state.links.length;
    },
  },
  actions: {
    removeLink(context, action: RemoveLink) {
      context.commit('REMOVE_LINK', action.index);
    },
    addLink(context, action: AddLink) {
      context.commit('ADD_LINK', action.link);
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

interface RemoveLink {
  type: 'removeLink';
  index: number;
}

interface AddLink {
  type: 'addLink';
  link: string;
}

interface RemoveAll {
  type: 'removeAll';
}

export type Action = RemoveLink | AddLink | RemoveAll;
