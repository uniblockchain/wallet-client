// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
  let component;

  const props = {
    menu: [],
    open: false,
    updateState: jest.fn(),
    logout: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Sidebar {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
