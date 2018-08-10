import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Stats from '@/components/Stats.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Stats.vue', () => {

  it('renders a button', () => {
    const stats = shallowMount(Stats, { store, localVue});
    const button = stats.find('button');
    const p = stats.find('p');

    expect(button.text()).toMatch('Remove all links');
    expect(p.text()).toMatch('There are currently 3 links');
  });

});
