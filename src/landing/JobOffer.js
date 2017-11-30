// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import { AnchorButton } from './ui';

import GradientText from './GradientText';

const Container = styled.div``;

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

const Location = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeSmall};
  line-height: 1.5;
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 36px;
  `};
`;

const Description = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeMedium};
    margin-bottom: 36px;
  `};
`;

const ListContainer = styled.ul`
  margin-bottom: 24px;
  padding: 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 36px;
  `};
`;

const ListHeading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeMedium};
  font-weight: ${variables.fontWeightBold};
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 24px;
    letter-spacing: -.5px;
  `};
`;

const ListItem = styled.li`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeSmall};
  line-height: 1.5;
  list-style: none;
  margin: 0;
  margin-bottom: 9px;
`;

const CTA = styled.div`
  margin-top: 36px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-top: 48px;
  `};
`;

type Props = {
  title: string,
  location: ?string,
  description: ?string,
  responsibilities: ?Array<string>,
  qualifications: ?Array<string>,
};

export const JobOffer = (props: Props) => (
  <Container>
    <Heading>
      <GradientText>{props.title}</GradientText>
    </Heading>
    {props.location && <Location>{props.location}</Location>}
    {props.description && <Description>{props.description}</Description>}
    {props.responsibilities && (
      <ListContainer>
        <ListHeading>Responsbilities</ListHeading>
        {props.responsibilities.map((responsibility, i) => (
          <ListItem key={i}>{responsibility}</ListItem>
        ))}
      </ListContainer>
    )}
    {props.qualifications && (
      <ListContainer>
        <ListHeading>We are looking for someone who has</ListHeading>
        {props.qualifications &&
          props.qualifications.map((qualification, i) => (
            <ListItem key={i}>{qualification}</ListItem>
          ))}
      </ListContainer>
    )}
    <CTA>
      <AnchorButton
        href="mailto:careers@getchange.com"
        color="gradient"
        size="small"
      >
        Apply
      </AnchorButton>
    </CTA>
  </Container>
);

export default JobOffer;
