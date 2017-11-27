// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, SubHeader, PrimaryButton, Modal } from '../../ui';
import cardInterestApi from './cardInterestApi';

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
      <div>
        <StyledHeader>Change Card is coming.</StyledHeader>
        <StyledSubHeader>First cards will be shipped Q4 2017</StyledSubHeader>
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
      </div>
    );
  }
}
export default CardInterest;
