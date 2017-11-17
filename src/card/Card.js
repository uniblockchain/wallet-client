// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { WrappedContent, Header, SubHeader, PrimaryButton, Modal } from '../ui';
import cardInterestApi from './cardInterestApi';
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
  width: -moz-fit-content;
  width: -webkit-fit-content;
  padding: 0 33px 0 33px;
  margin-top: 25px;
`;

OrderButton.displayName = 'OrderButton';

const Plastic = styled.img.attrs({
  src: plastic,
  alt: 'Plastic',
})`
  width: 90vw;
  margin-bottom: 3vh;
`;

type State = {
  isModalVisible: boolean,
};

type Props = {};

export class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  render() {
    const handleClick = () => {
      cardInterestApi.registerInterest().then(() => {
        this.setState({
          isModalVisible: true,
        });
      });
    };
    const handleConfirm = () => {
      this.setState({
        isModalVisible: false,
      });
    };
    return (
      <div>
        <StyledContent>
          <StyledHeader>Change Card is coming.</StyledHeader>
          <StyledSubHeader>First cards will be shipped Q4 2017</StyledSubHeader>
          <OrderButton onClick={handleClick}>Notify me</OrderButton>
          <Plastic />
        </StyledContent>
        {this.state.isModalVisible ? (
          <Modal
            title="Thanks!"
            description="We will let you know when we open registration."
            onConfirm={handleConfirm}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}
export default Card;
