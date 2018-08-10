import { shallowMount } from '@vue/test-utils';
import Stats from '@/components/Stats.vue';

describe('Stats.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Stats, {
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
