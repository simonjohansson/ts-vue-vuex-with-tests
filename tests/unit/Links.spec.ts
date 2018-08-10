import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Links from '@/components/Links.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Stats.vue', () => {

  it('renders three list items', () => {
    const stats = shallowMount(Links, { store, localVue});
    const li = stats.findAll('li');

    expect(li).toHaveLength(3);
  });

});
