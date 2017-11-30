// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import { GradientText } from './GradientText';

const Container = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin: 96px;
    padding: 0;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const InnerContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 24px;
  letter-spacing: -0.5px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 36px;
    letter-spacing: -1px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const LineContainer = styled.div`
  position: relative;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Line = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  z-index: ${variables.zIndexTimelineLine};
  width: 10px;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    ${variables.colorGreenLight} 0%,
    ${variables.colorBlue} 100%
  );
  border-radius: 9999px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: space-between;
    position: static;
    top: 0;
    width: 100%;
    height: 10px;
    margin-bottom: 24px;
    background-image: linear-gradient(
      to right,
      ${variables.colorGreenLight} 0%,
      ${variables.colorBlue} 100%
    );
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Milestones = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: space-between;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Milestone = styled.div`
  position: relative;
  z-index: ${variables.zIndexTimelineMilestone};
  margin-bottom: 18px;
  padding-left: 36px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 ${props => props.width + '%'};
    margin: 0;
    padding: 0;
    padding-right: 48px;
    padding-left: 9px;
    &:last-child {
      text-align: right;
      padding-right: 0;
      &:before {
        left: auto;
        right: 0;
      }
    }
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: -4px;
    width: 18px;
    height: 18px;
    border: 4px solid ${variables.colorWhite};
    border-radius: 9999px;
    ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
      top: -38px;
      left: 0;
    `};
  }
`;

const MilestoneTitle = styled.div`
  color: ${props =>
    props.highlighted ? variables.colorBlue : variables.colorNeutral};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 3px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 9px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const MilestoneDescription = styled.div`
  color: ${props =>
    props.highlighted ? variables.colorBlue : variables.colorNeutral};
  line-height: 1.4;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

type Props = {
  milestones: Array<Object>,
};

export const Timeline = (props: Props) => (
  <Container>
    <InnerContainer>
      <Heading>
        <GradientText>Product timeline</GradientText>
      </Heading>
      <LineContainer>
        <Line />
        <Milestones>
          {props.milestones.map((milestone, i) => (
            <Milestone
              highlighted={milestone.highlighted}
              width={100 / props.milestones.length}
              key={i}
            >
              <MilestoneTitle highlighted={milestone.highlighted}>
                {milestone.title}
              </MilestoneTitle>
              <MilestoneDescription highlighted={milestone.highlighted}>
                {milestone.body}
              </MilestoneDescription>
            </Milestone>
          ))}
        </Milestones>
      </LineContainer>
    </InnerContainer>
  </Container>
);

export default Timeline;
