// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import logo from './img/e-residency.png';

const Container = styled.div`
  margin: 36px 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin: 96px 0;
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
`;

const Columns = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: space-between;
  `};
`;

const Column = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 33%;
    &:last-child {
      flex: 0 0 19%;
      text-align: right;
    }
  `};
`;

const Logo = styled.img`
  display: none;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: inline-block;
    width: 80%;
    opacity: .5;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
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
      <Columns>
        <Column>
          <Body>
            <p>
              As a strong validation to our vision and plans, Change has
              partnered with the most advanced digital society in the world, the
              e-Residency initiative by the government of Estonia.
            </p>
          </Body>
        </Column>
        <Column>
          <Body>
            <p>
              This highly ambitious project is revered among global nomads and
              supporters of decentralization, including Tim Draper and Edward
              Lucas.
            </p>
          </Body>
        </Column>
        <Column>
          <Body>
            <Logo src={logo} title="Estonian e-Residency" />
          </Body>
        </Column>
      </Columns>
    </InnerContainer>
  </Container>
);

export default Residency;