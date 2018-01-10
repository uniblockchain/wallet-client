// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Disclaimer from './Disclaimer';
import GradientText from './GradientText';

import photo from './img/photo-landing-card.jpg';
import PlasticCard from './PlasticCard';

import ScrollToTarget from './ScrollToTarget';
import { Button } from './ui';

import variables from './variables';

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
`;

const PlasticContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -60px;
  @media (max-width: 340px) {
    transform: scale(0.9);
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    position: absolute;
    top: auto;
    bottom: -60px;
    left: 50%;
    margin: 0;
    z-index: ${variables.zIndexCardPlastic};
    transform: none;
  `};
`;

const ImageTransition = styled.div`
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 0.9s, opacity 0.6s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
    transform: translateX(0);
  `};
`;

const PlasticTransition = styled.div`
  opacity: 0;
  transform: translateX(192px);
  transition: transform 0.9s, opacity 0.6s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
    transform: translateX(0);
  `};
`;

const FadeTransition = styled.div`
  opacity: 0;
  transition: all 0.9s;
  ${props => props.delay && `transition-delay: ${props.delay}ms`};
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
  `};
`;

type Props = {};

type State = {
  isCardVisible: boolean,
  isTextVisible: boolean,
};

class Card extends React.Component<Props, State> {
  state = {
    isCardVisible: false,
    isTextVisible: false,
  };

  handleCardEnter = () => {
    this.setState({ isCardVisible: true });
  };

  handleCardLeave = () => {
    this.setState({ isCardVisible: false });
  };

  handleTextEnter = () => {
    this.setState({ isTextVisible: true });
  };

  handleTextLeave = () => {
    this.setState({ isTextVisible: false });
  };

  render() {
    return (
      <ScrollToTarget hash="#card" pos="center">
        <Container>
          <InnerContainer>
            <Waypoint
              onEnter={this.handleCardEnter}
              onLeave={this.handleCardLeave}
              topOffset="5%"
              bottomOffset="20%"
            >
              <VisualContainer>
                <Transition in={this.state.isCardVisible} timeout={2000}>
                  {state => (
                    <div>
                      <ImageContainer>
                        <ImageTransition state={state}>
                          <Image src={photo} alt="" />
                        </ImageTransition>
                      </ImageContainer>
                      <PlasticContainer>
                        <PlasticTransition state={state}>
                          <PlasticCard
                            name="Lisa Robinson"
                            number="1234 5678 9012 1101"
                            date="12/20"
                          />
                        </PlasticTransition>
                      </PlasticContainer>
                    </div>
                  )}
                </Transition>
              </VisualContainer>
            </Waypoint>
            <Waypoint
              onEnter={this.handleTextEnter}
              onLeave={this.handleTextLeave}
              topOffset="5%"
              bottomOffset="20%"
            >
              <TextContainer>
                <Transition in={this.state.isTextVisible} timeout={2000}>
                  {state => (
                    <div>
                      <FadeTransition state={state} delay={0}>
                        <Highlight>
                          <GradientText>Available soon</GradientText>
                        </Highlight>
                      </FadeTransition>
                      <FadeTransition state={state} delay={150}>
                        <Heading>Change Card</Heading>
                      </FadeTransition>
                      <FadeTransition state={state} delay={300}>
                        <Body>
                          Start converting your virtual currencies<Disclaimer>
                            The prepaid card is denominated in fiat currency
                            (USD, EUR, GBP). It can only be loaded with fiat
                            currency and only facilitates spending in fiat
                            currency. You can load the card with fiat currency
                            that you receive in exchange for your virtual
                            currency.
                          </Disclaimer>{' '}
                          seamlessly, with government level security.
                        </Body>
                      </FadeTransition>
                      <FadeTransition state={state} delay={450}>
                        <Link to="/app">
                          <Button color="gradient">Go to Wallet</Button>
                        </Link>
                      </FadeTransition>
                    </div>
                  )}
                </Transition>
              </TextContainer>
            </Waypoint>
          </InnerContainer>
        </Container>
      </ScrollToTarget>
    );
  }
}

export default Card;
