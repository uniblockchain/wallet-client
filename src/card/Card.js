// @flow
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pageActions } from '../page';
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

type Props = {
  showModal: boolean => void,
};

export const Card = (props: Props) => {
  const handleClick = () => {
    cardInterestApi.registerInterest().then(() => props.showModal(true));
  };
  const handleConfirm = () => {
    props.showModal(false);
  };
  return (
    <div>
      <StyledContent>
        <StyledHeader>Change Card is coming.</StyledHeader>
        <StyledSubHeader>First cards will be shipped Q4 2017</StyledSubHeader>
        <OrderButton onClick={handleClick}>Notify me</OrderButton>
        <Plastic />
      </StyledContent>
      <Modal
        title="Thanks!"
        description="We will let you know when we open registration."
        onConfirm={handleConfirm}
      />
    </div>
  );
};

const mapDispatchToProps = {
  showModal: pageActions.showModal,
};

export default connect(null, mapDispatchToProps)(Card);
