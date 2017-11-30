// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import ScrollToTarget from './ScrollToTarget';

import GradientText from './GradientText';
import NotifyMe from './NotifyMe';

const Container = styled.div`
  margin-bottom: 96px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 240px;
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
    padding-right: 480px;
    text-align: right;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
    padding-right: 576px;
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
    padding-left: 15%;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.4;
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
    padding-left: 25%;
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

export const Wallet = () => (
  <ScrollToTarget hash="#wallet">
    <Container>
      <InnerContainer>
        <Highlight>
          <GradientText>Launching Q4 2017</GradientText>
        </Highlight>
        <Heading>A sophisticated mobile wallet</Heading>
        <Body>
          Safe and easy way to store & keep track of virtual currencies
        </Body>
        <NotifyMe />
      </InnerContainer>
    </Container>
  </ScrollToTarget>
);

export default Wallet;
