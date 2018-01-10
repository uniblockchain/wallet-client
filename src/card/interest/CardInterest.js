// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Header,
  Modal,
  PrimaryButton,
  SubHeader,
  WrappedContent,
} from '../../ui';
import plastic from '../img/plastic.png';
import cardInterestApi from './cardInterestApi';

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
  isModalVisible: boolean,
};

type Props = {};

export class CardInterest extends Component<Props, State> {
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
      <StyledContent>
        <StyledHeader>Change Card is coming.</StyledHeader>
        <StyledSubHeader>First cards will be shipped soon.</StyledSubHeader>
        <div>
          <OrderButton onClick={handleClick}>Notify me</OrderButton>
        </div>
        {this.state.isModalVisible && (
          <Modal
            title="Thanks!"
            description="We will let you know when we open registration."
            onConfirm={handleConfirm}
          />
        )}
        <Plastic />
      </StyledContent>
    );
  }
}
export default CardInterest;
