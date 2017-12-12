// @flow
import React from 'react';
import styled from 'styled-components';

import variables from './variables';

import ScrollToTarget from './ScrollToTarget';
import Hero from './Hero';
import Wallet from './Wallet';
// import Card from './Card';
import Marketplace from './Marketplace';
import GlobalMovement from './GlobalMovement';
import Press from './Press';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
`;

export const Home = () => (
  <ScrollToTarget hash="#home" pos="top">
    <Container>
      <Hero />
      <Wallet />
      {/* <Card /> */}
      <Marketplace />
      <GlobalMovement />
      <Press />
    </Container>
  </ScrollToTarget>
);

export default Home;
