// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header, PrimaryButton, SubHeader, WrappedContent } from '../../ui';
import { CARD_ORDER_INTRO_ROUTE } from './constants';
import Done from './done';
import cardOrderApi from './cardOrderApi';
import plastic from '../img/plastic.png';

const StyledContent = styled(WrappedContent)`
  background-color: #e5f9f3;
`;

const Plastic = styled.img.attrs({
  src: plastic,
  alt: 'Plastic',
})`
  width: 90vw;
  margin-bottom: 3vh;
`;

const StyledHeader = styled(Header)`
  font-size: 36px;
`;

const StyledSubHeader = styled(SubHeader)`
  font-size: 16px;
  padding-top: 25px;
`;

const OrderButton = styled(PrimaryButton)`
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  margin-top: 25px;
`;

OrderButton.displayName = 'OrderButton';

type State = {
  ordered: ?boolean,
};

export class CardOrder extends React.Component<any, State> {
  state = {
    ordered: false,
  };

  componentDidMount() {
    cardOrderApi.hasOrder().then((ordered: boolean) => {
      this.setState({ ordered });
    });
  }

  render() {
    return this.state.ordered ? (
      <WrappedContent>
        <Done />
      </WrappedContent>
    ) : (
      <StyledContent>
        <StyledHeader>Get your Change card.</StyledHeader>
        <StyledSubHeader>
          Start spending your Bitcoin & other cryptocurrencies.
        </StyledSubHeader>
        <Link to={CARD_ORDER_INTRO_ROUTE}>
          <OrderButton>Order card</OrderButton>
        </Link>
        <Plastic />
      </StyledContent>
    );
  }
}

export default CardOrder;
