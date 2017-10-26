// @flow
import React from 'react';
import { Content } from '../ui';
import menu from '../menu';
import BottomNavigation from '../ui/bottomNavigation';
import TopBar from '../ui/topBar';

export const Settings = () => (
  <Content>
    <TopBar />
    <BottomNavigation menu={menu} />
  </Content>
);

export default { Settings };
