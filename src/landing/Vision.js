// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

import variables from './variables';

import photo from './img/photo-landing-vision.jpg';

const Container = styled.div`
  position: relative;
  margin-bottom: 1px;
  padding-bottom: 48px;
  background: ${variables.colorNeutralLightest};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 96px 0 120px;
  `};
`;

const InnerContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const TextContainer = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding-left: 480px;
    text-align: left;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-weight: ${variables.fontWeightBold};
  font-size: ${variables.fontSizeLargest};
  line-height: 1;
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeHuge};
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.5;
  margin-bottom: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    line-height: 1.4;
    margin-bottom: 36px;
  `};
`;

const ImageContainer = styled.div`
  margin-bottom: 60px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    overflow: hidden;
    position: absolute;
    left: calc(50% - 480px);
    top: -96px;
    width: 320px;
    height: 540px;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
  `};
`;

const Image = styled.img`
  width: 100%;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
`;

const More = styled.div`
  margin-top: 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  a {
    color: ${variables.colorBlue};
    &:hover {
      color: ${variables.colorBlueDark};
      text-decoration: none;
    }
  }
`;

export const Vision = () => (
  <Container>
    <InnerContainer>
      <ImageContainer>
        <Image src={photo} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>A global movement</Heading>
        <Body>
          In 2017, over 5600 individuals got together to demand a better banking
          experience. Change is set to build a more exciting bank that includes
          cryptocurrencies and an investment marketplace.
        </Body>
        <More>
          <Link to="/about">Learn more</Link>
        </More>
      </TextContainer>
    </InnerContainer>
  </Container>
);

export default Vision;
