// @flow
import React from 'react';
import styled from 'styled-components';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Landing = () => (
  <LandingContent>
    <FirstScreen />
    <SecondScreen />
    <ThirdScreen />
  </LandingContent>
);

export default Landing;
