// @flow
import React from 'react';
import { Content } from '../ui';
import menu from '../menu';
import BottomNavigation from '../bottomNavigation';
import TopBar from '../topBar';

export const Marketplace = () => (
  <Content>
    <TopBar />
    <BottomNavigation menu={menu} />
  </Content>
);

export default Marketplace;
