import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { resolve } from 'path';

Vue.use(Vuex);

const ADD_LINKE = ['ADD_LINK'];

export interface RootState {
  title: string;
  todos: Todo[];
}

export interface Todo {
  todo: string;
  done: boolean;
}
const store: StoreOptions<RootState> = {
  state: {
    title: 'Cool todo app',
    todos: [],
  },
  plugins: [createPersistedState()],
  mutations: {
    ADD_TODO(state, todo: string) {
      state.todos.push({todo, done: false});
    },
    REMOVE_TODO(state, index: number) {
      state.todos.splice(index, 1);
    },
    TOGGLE_DONE(state, index: number) {
      state.todos[index].done = !state.todos[index].done;
    },
    REMOVE_ALL(state) {
      state.todos = [];
    },
    REMOVE_ALL_DONE(state) {
      state.todos = state.todos.filter((todo) => !todo.done);
    }
  },
  getters: {
    countTodos(state): number {
      return state.todos.length;
    },
    countDone(state): number {
      return state.todos.filter((t: Todo) => t.done).length;
    },
  },
  actions: {
    removeTodo(context, action: RemoveTodo) {
      context.commit('REMOVE_TODO', action.index);
    },
    toggleTodo(context, action: ToggleTodo) {
      context.commit('TOGGLE_DONE', action.index);
    },

    addTodo(context, action: AddTodo) {
      context.commit('ADD_TODO', action.todo);
    },
    removeAllDone(context) {
      context.commit('REMOVE_ALL_DONE');
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
};

export default new Vuex.Store<RootState>(store);

interface RemoveTodo {
  type: 'removeTodo';
  index: number;
}

interface AddTodo {
  type: 'addTodo';
  todo: string;
}

interface ToggleTodo {
  type: 'toggleTodo';
  index: number;
}

interface RemoveAll {
  type: 'removeAll';
}

interface RemoveAllDone {
  type: 'removeAllDone';
}

export type Action = RemoveTodo | AddTodo | RemoveAll | ToggleTodo | RemoveAllDone ;
