// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

const Container = styled.div`
  background: ${variables.colorBlueDark};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const InnerContainer = styled.div`
  padding: 48px 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 960px;
    height: 320px;
    margin: 0 auto;
    padding: 0;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const FactsColumn = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 33.33%;
    display: flex;
    align-items: center;
    margin: 0;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Fact = styled.div`
  width: 100%;
  color: ${variables.colorWhite};
  font-size: ${variables.fontSizeNormal};
  font-family: ${variables.fontSecondary};
  line-height: 1.1;
  text-align: center;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    padding: 0 48px;
  `};
  strong {
    font-family: ${variables.fontPrimary};
    font-size: ${variables.fontSizeLarger};
    display: block;
    margin: 9px 0;
    ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
      font-size: ${variables.fontSizeLargest};
    `};
  }
`;

export const AboutFacts = () => (
  <Container>
    <InnerContainer>
      <FactsColumn>
        <Fact>
          Offices in <strong>Estonia & Singapore</strong>
        </Fact>
      </FactsColumn>
      <FactsColumn>
        <Fact>
          <strong>5600</strong> contributors
        </Fact>
      </FactsColumn>
      <FactsColumn>
        <Fact>
          <strong>$17.5 M+</strong> raised in 2017
        </Fact>
      </FactsColumn>
    </InnerContainer>
  </Container>
);

export default AboutFacts;
