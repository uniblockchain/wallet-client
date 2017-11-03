// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Sidebar />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
