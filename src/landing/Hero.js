// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import GradientText from './GradientText';
import MobileDevice from './MobileDevice';
import HeroWords from './HeroWords';

import screenshot from './img/screenshot.png';
import background from './img/background.png';

const Container = styled.div`
  text-align: center;
  position: relative;
  height: 80vh;
  overflow: hidden;
  margin-bottom: 60px;
  padding: 72px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    height: 1302px;
    padding: 144px 96px;
    margin: 0;
  `};
`;

const InnerContainer = styled.div`
  padding: 30px 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 0;
  `};
`;

const WordsHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeMedium};
  line-height: 1;
  margin-bottom: 6px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarge};
  `};
`;

const WordContainer = styled.div``;

const DeviceContainer = styled.div`
  position: absolute;
  left: 0;
  top: 240px;
  z-index: ${variables.zIndexHeroDevice};
  width: 100%;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: block;
    top: 420px;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

const Background = styled.div`
  position: absolute;
  top: -174px;
  left: 50%;
  z-index: ${variables.zIndexHeroBackground};
  width: 640px;
  height: 640px;
  transform: translateX(-50%);
  pointer-events: none;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    top: -720px;
    width: 1680px;
    height: 1680px;
  `};
`;

const BackgroundImage = styled.img`
  width: 100%;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
`;

export const Hero = () => (
  <Container>
    <InnerContainer>
      <WordsHeading>
        <GradientText>Change the way you</GradientText>
      </WordsHeading>
      <WordContainer>
        <HeroWords words={['invest', 'pay', 'live', 'bank']} />
      </WordContainer>
      <DeviceContainer>
        <MobileDevice image={screenshot} />
      </DeviceContainer>
      <Background>
        <BackgroundImage src={background} alt="" />
      </Background>
    </InnerContainer>
  </Container>
);

export default Hero;
