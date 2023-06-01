import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import UserItem from 'src/components/UserItem.vue';

installQuasar();

describe('UserItem Component', () => {
  it('should mount component with UserItem', () => {
    const wrapper = mount(UserItem, {
      props: {
        id: 1,
        first_name: 'First name',
        last_name: 'Last name',
        email: 'email@gmail.com',
        avatar:
          'https://www.superbotics.com/wp-content/uploads/2018/03/SuperBotics-logo-transparent.png',
      },
    });
    expect(wrapper.findAll('.user-item')).toHaveLength(2);
  });
});
