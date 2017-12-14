// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import { GradientText } from './GradientText';

import NotifyMe from './NotifyMe';

const Container = styled.div`
  margin-bottom: 60px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto 120px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    padding: 0;
  `};
`;

const Column = styled.div`
  margin-bottom: 36px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 50%;
    padding-right: 48px;
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 24px;
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  font-family: ${variables.fontSecondary};
  color: ${variables.colorNeutralDark};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
  p {
    margin-bottom: 12px;
    ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
      font-size: ${variables.fontSizeMedium};
    `};
  }
`;

const CTA = styled.div`
  margin-top: 24px;
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    margin-top: 42px;
  `};
`;

export const VisionMission = () => (
  <Container>
    <InnerContainer>
      <Column>
        <Heading>
          <GradientText>Vision</GradientText>
        </Heading>
        <Body>
          <p>To be the most exciting banking application in the world.</p>
          <CTA>
            <NotifyMe />
          </CTA>
        </Body>
      </Column>
      <Column>
        <Heading>
          <GradientText>Our mission</GradientText>
        </Heading>
        <Body>
          <p>
            To aggregate all financial services in one sophisticated platform,
            enabling payments, transfers, and investments worldwide.
          </p>
          <p>
            Change is set to simplify and modernise retail banking, focusing on
            security, efficiency, and equal access to opportunities.
          </p>
        </Body>
      </Column>
    </InnerContainer>
  </Container>
);

export default VisionMission;