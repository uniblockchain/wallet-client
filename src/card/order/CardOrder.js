// @flow

import React from 'react';
import styled from 'styled-components';
import { GradientButton, WrappedContent } from '../../ui';
import PlasticCard from '../PlasticCard';
import cardOrderApi from './cardOrderApi';
import CardOrderSlider from './CardOrderSlider';

const OrderButtonCentered = styled.div`
  text-align: center;
  margin-bottom: 70px;
`;

const PositionedPlasticCard = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export type State = {
  ordered: ?boolean,
};

export class CardOrder extends React.Component<any, State> {
  state = {
    ordered: undefined,
  };

  componentDidMount() {
    cardOrderApi.hasOrder().then((ordered: boolean) => {
      this.setState({ ordered });
    });
  }

  createOrder = () => {
    cardOrderApi.createOrder().then(() => {
      this.setState({ ordered: true });
    });
  };

  render() {
    if (this.state.ordered === undefined) {
      return null;
    }
    return this.state.ordered ? (
      <WrappedContent>
        <PositionedPlasticCard>
          <PlasticCard
            name="Lisa Robinson"
            number="1234 5678 9012 1101"
            date="12/20"
          />
        </PositionedPlasticCard>
        <CardOrderSlider cardOrdered />
      </WrappedContent>
    ) : (
      <WrappedContent>
        <PositionedPlasticCard>
          <PlasticCard
            name="Lisa Robinson"
            number="1234 5678 9012 1101"
            date="12/20"
          />
        </PositionedPlasticCard>
        <CardOrderSlider cardOrdered={false} />
        <OrderButtonCentered>
          <GradientButton inline onClick={this.createOrder}>
            Join waiting list
          </GradientButton>
        </OrderButtonCentered>
      </WrappedContent>
    );
  }
}

export default CardOrder;
