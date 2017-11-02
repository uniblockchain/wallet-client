// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import TopBar from './ui/topBar';
import BottomNavigation from './ui/bottomNavigation';
import menu from './menu';

it('renders without crashing', () => {
  const props = { authenticated: false };
  const component = shallow(<App {...props} />);
  expect(component);

  it('renders Top', () => {
    expect(component.contains(<TopBar />)).toBe(true);
  });

  it('renders bottom navigation with menu', () => {
    expect(component.contains(<BottomNavigation menu={menu} />)).toBe(true);
  });
});
