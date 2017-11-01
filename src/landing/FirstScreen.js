// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../ui';
import screenshot from './img/screenshot.png';

const WrappedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 9vh 8vw 0 8vw;
`;

const Content = styled.div`
  height: 100vh;
  background-image: linear-gradient(151deg, #19c3ed, #8bf2d3);
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #ffffff;
`;

const SubHeading = styled.p`
  font-size: 24px;
  margin-top: 10px;
  color: #00346b;
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
  text-align: center;
  color: #ffffff;
`;

const Screenshot = styled.div`
  margin-top: -25px;
  img {
    display: block;
    position: relative;
    max-width: 82vw;
    max-height: 90vh;
    margin: auto;
  }
`;

export const FirstScreen = () => (
  <Content>
    <WrappedContent>
      <Heading>Change is a free digital wallet.</Heading>
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
      <Screenshot>
        <img src={screenshot} alt="Screenshot" />
      </Screenshot>
    </WrappedContent>
  </Content>
);

export default FirstScreen;
