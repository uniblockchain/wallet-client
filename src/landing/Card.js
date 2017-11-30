// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import ScrollToTarget from './ScrollToTarget';

import GradientText from './GradientText';
import NotifyMe from './NotifyMe';
import PlasticCard from './PlasticCard';

import photo from './img/photo-landing-card.jpg';

const Container = styled.div`
  margin-bottom: 96px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-bottom: 240px;
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
    text-align: left;
    padding: 0;
    padding-left: 480px;
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

const Highlight = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarge};
  font-weight: ${variables.fontWeightBold};
  line-height: 1.2;
  margin-bottom: 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 24px;
  `};
`;

const VisualContainer = styled.div`
  position: relative;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    height: 480px;
    margin-bottom: 168px;
  `};
`;

const ImageContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${variables.zIndexCardImage};
    width: 720px;
    height: 480px;
  `};
`;

const Image = styled.img`
  width: 100%;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
`;

const PlasticContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -60px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    position: absolute;
    top: auto;
    bottom: -48px;
    left: 50%;
    margin: 0;
    z-index: ${variables.zIndexCardPlastic};
    transform: none;
  `};
`;

export const Card = () => (
  <ScrollToTarget hash="#card">
    <Container>
      <InnerContainer>
        <VisualContainer>
          <ImageContainer>
            <Image src={photo} alt="" />
          </ImageContainer>
          <PlasticContainer>
            <PlasticCard
              name="Francisco Bernardo"
              number="1234 5678 9012 1101"
              date="12/20"
            />
          </PlasticContainer>
        </VisualContainer>
        <TextContainer>
          <Highlight>
            <GradientText>Shipping Q1 2018</GradientText>
          </Highlight>
          <Heading>Change Card</Heading>
          <Body>
            Start converting your virtual currencies seamlessly, with bank level
            security
          </Body>
          <NotifyMe />
        </TextContainer>
      </InnerContainer>
    </Container>
  </ScrollToTarget>
);

export default Card;
