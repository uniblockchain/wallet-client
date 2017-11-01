// @flow
import React from 'react';
import styled from 'styled-components';
import {
  Content,
  WrappedContent,
  Header,
  SubHeader,
  PrimaryButton,
} from '../ui';
import menu from '../menu';
import BottomNavigation from '../ui/bottomNavigation';
import TopBar from '../ui/topBar';
import plastic from './img/plastic.png';

const StyledContent = styled(WrappedContent)`
  background-color: #e5f9f3;
`;

const StyledHeader = styled(Header)`
  font-size: 36px;
  color: #02bda5;
`;

const StyledSubHeader = styled(SubHeader)`
  font-size: 16px;
  color: #02bda5;
  padding-top: 25px;
`;

const OrderButton = styled(PrimaryButton)`
  display: inline;
  width: fit-content;
  padding: 0 33px 0 33px;
  margin-top: 25px;
`;

const Plastic = styled.img.attrs({
  src: plastic,
  alt: 'Plastic',
})`
  width: 90vw;
  margin-bottom: 3vh;
`;

export const Card = () => (
  <Content>
    <TopBar light />
    <StyledContent>
      <StyledHeader>Get your Change card.</StyledHeader>
      <StyledSubHeader>
        Start spending your Bitcoin & other cryptocurrencies.
      </StyledSubHeader>
      <OrderButton>Order Card</OrderButton>
      <Plastic />
    </StyledContent>
    <BottomNavigation menu={menu} />
  </Content>
);

export default Card;
