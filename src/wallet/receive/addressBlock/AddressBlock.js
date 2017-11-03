// @flow

import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { LinearProgress } from 'material-ui';

import copy from 'copy-to-clipboard';
import { connect } from 'react-redux';
import type { Wallet } from '../../walletState';
import CurrencyName from '../../CurrencyName';
import withWallet from '../../withWallet';
import { PrimaryButton, Content } from '../../../ui';

type Props = {
  wallets: Array<Wallet>,
  activeWalletId: ?number,
  onCopy: string => void,
};

function getActiveWallet(activeId: ?number, wallets: Array<Wallet>): ?Wallet {
  if (wallets.length) {
    if (activeId) {
      return wallets.find(wallet => wallet.id === activeId);
    }
    return wallets[0];
  }
  return null;
}

const StyledContent = styled(Content)`
  align-items: center;
  padding: 0 18px 0 18px;
  h1 {
    color: ${props => props.theme.altText};
    margin: 39px 0 36px 0;
    font-size: 36px;
  }
`;

const AddressBox = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddressHeader = styled.h2`
  padding-top: 13px;
  font-size: 12px;
  text-transform: uppercase;
  color: #02bda5;
`;

AddressHeader.displayName = 'AddressHeader';

const Address = styled.h2`
  font-size: 12px;
  background-color: white;
  color: #686868;
  padding: 10px;
  border-radius: 6px;
`;

Address.displayName = 'Address';

const CopyButton = styled(PrimaryButton)`
  font-size: 14px;
  height: 30px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

CopyButton.displayName = 'CopyButton';

export const AddressBlock = ({ onCopy, wallets, activeWalletId }: Props) => {
  const wallet: ?Wallet = getActiveWallet(activeWalletId, wallets);

  if (!wallet) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  const currencyName: string = CurrencyName.get(wallet.currency);

  return (
    <StyledContent>
      <h1>Receive {currencyName}</h1>
      <AddressBox>
        <AddressHeader>Your {currencyName} address</AddressHeader>
        <Address>{wallet.receiveAddress}</Address>
        <div>
          <CopyButton onClick={() => onCopy(wallet.receiveAddress)}>
            Tap to copy
          </CopyButton>
        </div>
      </AddressBox>
    </StyledContent>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  activeWalletId: state.wallet.activeId,
  onCopy: copy,
});

const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(AddressBlock));
