// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

const Container = styled.div`
  margin: 36px 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin: 96px 0;
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

export const Residency = () => (
  <Container>
    <InnerContainer>
      <Heading>e-Residency</Heading>
      <Body>
        <p>
          As a strong validation to our vision and plans, Change has partnered
          with the most advanced digital society in the world, the e-Residency
          initiative by the government of Estonia.
        </p>
        <p>
          This highly ambitious project is revered among global nomads and
          supporters of decentralization, including Tim Draper and Edward Lucas.
        </p>
      </Body>
    </InnerContainer>
  </Container>
);

export default Residency;
