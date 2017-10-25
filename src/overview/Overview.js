// @flow
import React from 'react';
import { Content } from '../ui';
import menu from '../menu';
import BottomNavigation from '../bottomNavigation';

export const Overview = () => (
  <Content>
    <BottomNavigation menu={menu} />
  </Content>
);

export default Overview;
