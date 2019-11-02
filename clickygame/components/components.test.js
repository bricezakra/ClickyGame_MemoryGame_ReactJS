import React from 'react';
import { shallow } from 'enzyme';
import Components from './components';

describe('<Components />', () => {
  test('renders', () => {
    const wrapper = shallow(<Components />);
    expect(wrapper).toMatchSnapshot();
  });
});
