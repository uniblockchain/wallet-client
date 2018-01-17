// @flow
import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Header, Paragraph, PrimaryButton } from '../../../ui';
import withWallet from '../../../wallet/withWallet';
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
  activeWalletId: number,
  confirm: number => void,
};

export const Confirm = ({ activeWalletId, confirm }: Props) => (
  <div>
    <StyledHeader>Please confirm your order.</StyledHeader>
    <Explanation>That’s it, you’re almost done.</Explanation>
    <PrimaryButton onClick={() => confirm(activeWalletId)}>
      Confirm
    </PrimaryButton>
  </div>
);

Confirm.displayName = 'Confirm';

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  activeWalletId: state.wallet.activeId,
});

const mapDispatchToProps = {
  confirm: confirmRoutine,
};

const reduxComponent = connect(mapStateToProps, mapDispatchToProps);
const ConfirmWithWallet = withWallet(reduxComponent(Confirm));
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;
