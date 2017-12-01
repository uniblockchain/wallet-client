// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import LogoStrip from './LogoStrip';
import { GradientText } from './GradientText';

import logoKuCoin from './img/exchanges/kucoin.png';
import logoYoBit from './img/exchanges/yobit.png';

const Container = styled.div`
  margin-bottom: 1px;
  padding: 36px 0 0;
  background: ${variables.colorNeutralLightest};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-top: 96px;
    padding: 60px 0 30px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
    padding: 0;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const Columns = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Column = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 50%;
    padding-right: 48px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 24px;
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  p {
    margin-bottom: 12px;
    ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
      font-size: ${variables.fontSizeMedium};
    `};
  }
`;

const ExchangesHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeMedium};
  color: ${variables.colorNeutralDark};
  text-align: center;
  margin-top: 36px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-top: 48px;
  `};
`;

export const Token = () => (
  <Container>
    <InnerContainer>
      <Heading>
        <GradientText>Change Token</GradientText>
      </Heading>
      <Columns>
        <Column>
          <Body>
            <p>
              More than just a company, Change is a movement of people who will
              not settle for an average banking experience.
            </p>
          </Body>
        </Column>
        <Column>
          <Body>
            <p>
              A limited supply of 79 million tokens exist in the world, traded
              publicly everyday.
            </p>
          </Body>
        </Column>
      </Columns>

      <ExchangesHeading>Start trading at</ExchangesHeading>

      <LogoStrip
        items={[
          { name: 'KuCoin', image: logoKuCoin, link: 'https://kucoin.com/' },
          { name: 'YoBit', image: logoYoBit, link: 'https://yobit.net/en/' },
        ]}
      />
    </InnerContainer>
  </Container>
);

export default Token;
