// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from './Sidebar';
import type { Props } from './Sidebar';

describe('Sidebar component', () => {
  let component;

  const props: Props = {
    menu: [],
    open: false,
    path: '/',
    goto: jest.fn(),
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
