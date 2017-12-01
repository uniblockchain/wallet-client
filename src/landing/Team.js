// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

import variables from './variables';

import svgLinkedIn from './img/social/linkedin.svg';

const Container = styled.div`
  margin: 36px 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin: 60px 0;
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
`;

const Body = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeMedium};
  `};
  p {
    margin-bottom: 12px;
  }
`;

const TeamContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-top: 48px;
  `};
`;

const Person = styled.div`
  flex: 0 0 50%;
  margin-bottom: 48px;
  padding-right: 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 192px;
    margin-bottom: 24px;
    padding-right: 0;
  `};
`;

const PersonImage = styled.img`
  height: 96px;
  margin-bottom: 18px;
  border: 4px solid ${variables.colorNeutralLightest};
  border-radius: 9999px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    height: 192px;
  `};
`;

const PersonName = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeNormal};
  line-height: 1.2;
  margin-bottom: 6px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarge};
    text-align: center;
  `};
`;

const PersonTitle = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeSmall};
  padding-right: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeNormal};
    text-align: center;
    padding: 0;
  `};
`;

const PersonLinks = styled.div`
  margin-top: 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    text-align: center;
    margin-top: 18px;
  `};
`;

const Icon = styled.div`
  flex: 0 0 21px;
  display: inline-block;
  width: 21px;
  margin: 0 12px;
  opacity: 0.25;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    &:hover {
      opacity: .5;
  `};
`;

const IconImage = styled.img`
  width: 100%;
`;

type Props = {
  title: string,
  body?: string,
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
            <PersonImage src={person.image} alt={person.name} />
            <PersonName>{person.name}</PersonName>
            <PersonTitle>{person.title}</PersonTitle>
            {person.linkedin && (
              <PersonLinks>
                <Link to={person.linkedin} target="_blank">
                  <Icon>
                    <IconImage src={svgLinkedIn} alt="LinkedIn" />
                  </Icon>
                </Link>
              </PersonLinks>
            )}
          </Person>
        ))}
      </TeamContainer>
    </InnerContainer>
  </Container>
);

export default Team;
