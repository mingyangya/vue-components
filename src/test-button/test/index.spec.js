import { mount } from '@vue/test-utils';
import DemoButton from '../../test-button';

test('render demo button', () => {
  const wrapper = mount(DemoButton);
  expect(wrapper).toMatchSnapshot();
});
