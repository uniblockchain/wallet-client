// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import ScrollToTarget from './ScrollToTarget';

import GradientText from './GradientText';
import NotifyMe from './NotifyMe';

import photo from './img/photo-landing-marketplace.jpg';

const Container = styled.div`
  margin-bottom: 96px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 288px;
  `};
`;

const InnerContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`

  `};
`;

const TextContainer = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    text-align: left;
    padding: 0;
    padding-right: 480px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    padding-right: 576px;
  `};
`;

const Highlight = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarge};
  font-weight: ${variables.fontWeightBold};
  line-height: 1.2;
  margin-bottom: 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 24px;
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-weight: ${variables.fontWeightBold};
  font-size: ${variables.fontSizeLargest};
  line-height: 1;
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeHuge};
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.5;
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    line-height: 1.4;
    margin-bottom: 36px;
  `};
`;

const ImageContainer = styled.div`
  margin-bottom: 60px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    overflow: hidden;
    width: 100%;
    height: 360px;
    margin-bottom: 120px;
  `};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    height: 480px;
  `};
`;

const Image = styled.img`
  width: 100%;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
`;

export const Marketplace = () => (
  <ScrollToTarget hash="#marketplace">
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Image src={photo} alt="" />
        </ImageContainer>
        <TextContainer>
          <Highlight>
            <GradientText>Launching Q1 2018</GradientText>
          </Highlight>
          <Heading>Finance marketplace</Heading>
          <Body>
            Access a multitude of investing opportunities, all in one App.
          </Body>
          <NotifyMe />
        </TextContainer>
      </InnerContainer>
    </Container>
  </ScrollToTarget>
);

export default Marketplace;
