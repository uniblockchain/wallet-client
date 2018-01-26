// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Header, Paragraph, PrimaryButton } from '../../../ui';
import confirmRoutine from './confirmRoutine';

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

const Explanation = styled(Paragraph)`
  margin-top: 10px;
  width: 80%;
  margin-bottom: 50px;
`;

type Props = {
  confirm: () => void,
};

export const Confirm = ({ confirm }: Props) => (
  <div>
    <StyledHeader>Please confirm your details.</StyledHeader>
    <Explanation>
      That’s it, you’re almost done. We’ll let you know when we are starting to
      deliver the cards.
    </Explanation>
    <PrimaryButton onClick={() => confirm()}>Confirm</PrimaryButton>
  </div>
);

Confirm.displayName = 'Confirm';

const mapDispatchToProps = {
  confirm: confirmRoutine,
};

const reduxComponent = connect(undefined, mapDispatchToProps);
const ConfirmWithWallet = reduxComponent(Confirm);
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;
