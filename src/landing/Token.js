// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import { GradientText } from './GradientText';

const Container = styled.div`
  margin-bottom: 1px;
  padding: 36px 0;
  background: ${variables.colorNeutralLightest};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 60px 0;
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
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
  p {
    margin-bottom: 12px;
    ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
      font-size: ${variables.fontSizeMedium};
    `};
  }
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
    </InnerContainer>
  </Container>
);

export default Token;
