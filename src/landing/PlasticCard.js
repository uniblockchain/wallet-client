// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

const Container = styled.div`
  position: relative;
  width: 320px;
  height: 200px;
  background: linear-gradient(
    to right,
    ${variables.colorGreenLight},
    ${variables.colorBlue}
  );
  border-radius: 12px;
  box-shadow: ${variables.boxShadowNeutralNormal};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 480px;
    height: 294px;
    border-radius: 16px;
  `};
`;

const Chip = styled.div`
  position: absolute;
  bottom: 102px;
  left: 24px;
  width: 50px;
  height: 36px;
  background: ${variables.colorGreen};
  border-radius: 4px;
  opacity: 0.25;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    left: 36px;
    bottom: 148px;
    width: 66px;
    height: 48px;
  `};
`;

const Number = styled.div`
  color: ${variables.colorWhite};
  font-family: ${variables.fontOCR};
  font-size: ${variables.fontSizeMedium};
  font-weight: ${variables.fontWeightBold};
  text-transform: uppercase;
  position: absolute;
  left: 24px;
  bottom: 65px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    font-weight: ${variables.fontWeightNormal};
    left: 36px;
    bottom: 98px;
  `};
`;

const Date = styled.div`
  color: ${variables.colorWhite};
  font-family: ${variables.fontOCR};
  font-size: ${variables.fontSizeNormal};
  font-weight: ${variables.fontWeightBold};
  text-transform: uppercase;
  position: absolute;
  left: 140px;
  bottom: 39px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarge};
    font-weight: ${variables.fontWeightNormal};
    left: 180px;
    bottom: 65px;
  `};
`;

const Name = styled.div`
  color: ${variables.colorWhite};
  font-family: ${variables.fontOCR};
  font-size: ${variables.fontSizeNormal};
  font-weight: ${variables.fontWeightBold};
  text-transform: uppercase;
  position: absolute;
  left: 24px;
  bottom: 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarge};
    font-weight: ${variables.fontWeightNormal};
    left: 36px;
    bottom: 29px;
  `};
`;

const Good = styled.div`
  color: ${variables.colorWhite};
  font-family: ${variables.fontTertiary};
  font-size: 9px;
  font-weight: ${variables.fontWeightBold};
  line-height: 1.1;
  text-align: right;
  text-transform: uppercase;
  position: absolute;
  left: 80px;
  bottom: 43px;
  width: 48px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: 11px;
    left: 120px;
    bottom: 69px;
  `};
`;

type Props = {
  name: string,
  number: string,
  date: string,
};

export const PlasticCard = (props: Props) => (
  <Container>
    <Chip />
    <Number>{props.number}</Number>
    <Good>Good thru</Good>
    <Date>{props.date}</Date>
    <Name>{props.name}</Name>
  </Container>
);

export default PlasticCard;
