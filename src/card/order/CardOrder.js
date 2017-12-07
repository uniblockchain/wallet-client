// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header, SubHeader, PrimaryButton } from '../../ui';
import routes from '../../router';

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

export const CardOrder = () => (
  <div>
    <StyledHeader>Get your Change card.</StyledHeader>
    <StyledSubHeader>
      Start spending your Bitcoin & other cryptocurrencies.
    </StyledSubHeader>
    <Link to={routes.CARD_ORDER}>
      <OrderButton>Order card</OrderButton>
    </Link>
  </div>
);

export default CardOrder;
