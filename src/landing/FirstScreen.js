// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../ui';

const WrappedContent = styled.div`
  padding: 2em;
`;

const Content = styled.div`
  height: 100vh;
  background-image: linear-gradient(151deg, #19c3ed, #8bf2d3);
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: bold;
  line-height: 1.05;
  letter-spacing: -0.9px;
  text-align: left;
  color: #ffffff;
`;

const SubHeading = styled.h2`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -0.5px;
  text-align: left;
  color: #00346b;
  width: 50vw;
`;

const BlueButton = PrimaryButton.extend`
  margin-top: 36px;
  background-color: #00346b;
  a {
    color: white;
  }
`;

const SwipeDown = styled.div`
  margin-top: 33px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: center;
  color: #ffffff;
`;

export const FirstScreen = () => (
  <Content>
    <WrappedContent>
      <Heading>Change is a free digital wallet</Heading>
      <SubHeading>Send money and buy things. Safely.</SubHeading>
      <BlueButton>
        <Link to="/">Get Started</Link>
      </BlueButton>
      <SwipeDown>
        <p>Swipe down to learn more</p>
        <p>
          <i className="material-icons">arrow_downward</i>
        </p>
      </SwipeDown>
    </WrappedContent>
  </Content>
);

export default FirstScreen;
