import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Todos from '@/components/Todos.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Stats.vue', () => {

  it('renders three list items', () => {
    const stats = shallowMount(Todos, { store, localVue});
    const li = stats.findAll('li');

    expect(li).toHaveLength(3);
  });

});
