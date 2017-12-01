// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Transition } from 'react-transition-group';

import variables from './variables';

import MobileDevice from './MobileDevice';
import MarketplaceCard from './MarketplaceCard';

import svgScreenshot from './img/screenshot-marketplace.svg';

const Container = styled.div`
  position: relative;
`;

const DeviceContainer = styled.div`
  position: relative;
  z-index: ${variables.zIndexMarketplaceVisualDeviceContainer};
`;

const CardSlots = styled.div`
  display: none;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    overflow: hidden;
    position: absolute;
    top: 252px;
    left: 100%;
    z-index: ${variables.zIndexMarketplaceVisualCards};
    width: 1152px;
    height: 288px;
    background: linear-gradient(
      to right,
      ${variables.colorGreenLight},
      ${variables.colorBlue}
    );
  `};
`;

const Cards = styled.div`
  flex: 0 0 288px;
  overflow: hidden;
  position: relative;
  border-right: 1px solid ${variables.colorWhite};
`;

const DeviceCards = styled.div`
  overflow: hidden;
  position: absolute;
  top: 198px;
  left: 50%;
  width: 230px;
  height: 230px;
  margin-left: -115px;
  z-index: ${variables.zIndexMarketplaceVisualDeviceCards};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    top: 252px;
    left: 36px;
    width: 288px;
    height: 288px;
    margin: 0;
  `};
`;

const DeviceCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${variables.zIndexMarketplaceVisualDeviceCardContainer};
  transform: translateX(100%);
  transition: all 0.6s;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`

  `};
  ${props =>
    props.state === 'entering' &&
    `
    transform: translateX(0);
    z-index: ${variables.zIndexMarketplaceVisualDeviceCardContainerActive};
  `};
  ${props =>
    props.state === 'entered' &&
    `
    transform: translateX(0);
    z-index: ${variables.zIndexMarketplaceVisualDeviceCardContainer};
  `};
  ${props =>
    props.state === 'exiting' &&
    `
    transform: scale(.8);
    opacity: 0.6;
    z-index: ${variables.zIndexMarketplaceVisualDeviceCardContainer};
  `};
  ${props =>
    props.state === 'exited' &&
    `
    transition: none;
    z-index: ${variables.zIndexMarketplaceVisualDeviceCardContainer};
  `};
`;

const CardContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  height: 288px;
  transform: translateX(100%);
  transition: all 0.6s;

  ${props =>
    props.state === 'entering' &&
    `
    transform: translateX(0);
  `};
  ${props =>
    props.state === 'entered' &&
    `
    transform: translateX(0);
  `};
  ${props =>
    props.state === 'exiting' &&
    `
    transform: translateX(-100%);
  `};
  ${props =>
    props.state === 'exited' &&
    `
    transition: none;
  `};
`;

type Props = {
  cards: Array<Object>,
};

type State = {
  activeCardIndex: number,
};

class MarketplaceVisual extends React.Component<Props, State> {
  state = {
    activeCardIndex: 0,
  };

  static defaultProps = {
    cards: [
      {
        title: 'Stocks',
        description: 'Automated wealth management.',
      },
      {
        title: 'Real estate',
        description: 'Accessible real estate investing.',
      },
      {
        title: 'Loans',
        description: 'Peer to peer loan opportunities.',
      },
      {
        title: 'Startups',
        description: 'Invest in early stage high growth companies.',
      },
      {
        title: 'Insurance',
        description: 'Buy travel insurance from the app.',
      },
      {
        title: 'Credit',
        description: 'Apply for personal loans.',
      },
    ],
  };

  intervalId: any;

  componentDidMount() {
    const totalCards = this.props.cards.length;

    this.intervalId = setInterval(() => {
      const nextCard =
        this.state.activeCardIndex >= totalCards - 1
          ? 0
          : this.state.activeCardIndex + 1;
      this.setState({ activeCardIndex: nextCard });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  isActiveCard(activeCardIndex: number, slotIndex: number, j: number) {
    const totalCards = this.props.cards.length;

    let cardIndex = activeCardIndex + slotIndex + 1;

    if (cardIndex > totalCards - 1) {
      cardIndex = cardIndex - totalCards;
    }

    return cardIndex === j;
  }

  render() {
    return (
      <Container>
        <DeviceContainer>
          <DeviceCards>
            {this.props.cards.map((card, i) => (
              <Transition
                key={i}
                in={this.state.activeCardIndex === i}
                timeout={600}
              >
                {state => (
                  <DeviceCardContainer state={state}>
                    <MarketplaceCard
                      title={card.title}
                      description={card.description}
                      color={variables.colorGreenLight}
                    />
                  </DeviceCardContainer>
                )}
              </Transition>
            ))}
          </DeviceCards>
          <MobileDevice image={svgScreenshot} />
        </DeviceContainer>
        <CardSlots>
          {this.props.cards.map((card, i) => (
            <Cards key={i}>
              {this.props.cards.map((card, j) => (
                <Transition
                  key={j}
                  in={this.isActiveCard(this.state.activeCardIndex, i, j)}
                  timeout={600}
                >
                  {state => (
                    <CardContainer state={state}>
                      <MarketplaceCard
                        title={card.title}
                        description={card.description}
                      />
                    </CardContainer>
                  )}
                </Transition>
              ))}
            </Cards>
          ))}
        </CardSlots>
      </Container>
    );
  }
}

export default MarketplaceVisual;
