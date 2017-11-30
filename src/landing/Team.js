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
    letter-spacing: -1px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeMedium};
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
  p {
    margin-bottom: 12px;
  }
`;

const TeamContainer = styled.div`
  margin-top: 48px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 48px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Person = styled.div`
  margin-bottom: 48px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 25%;
    padding-right: 48px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const PersonName = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeLarge};
  line-height: 1.2;
  margin-bottom: 6px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const PersonTitle = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeMedium};
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

type Props = {
  title: string,
  body: ?string,
  people: Array<Object>,
};

export const Team = (props: Props) => (
  <Container>
    <InnerContainer>
      <Heading>{props.title}</Heading>
      {props.body && <Body>{props.body}</Body>}
      <TeamContainer>
        {props.people.map((person, i) => (
          <Person key={i}>
            <PersonName>{person.name}</PersonName>
            <PersonTitle>{person.title}</PersonTitle>
          </Person>
        ))}
      </TeamContainer>
    </InnerContainer>
  </Container>
);

export default Team;
