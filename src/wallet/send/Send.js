// @flow

import React from 'react';
import { connect } from 'react-redux';
import menu from '../../menu';
import BottomNavigation from '../../ui/bottomNavigation';
import TopBar from '../../ui/topBar';
import CurrencyTabs from '../currencyTabs';
import sendActions from './sendActions';
import type { SendTransactionRequest } from './sendActionTypes';
import SendForm from './SendForm';

type Props = {
  walletId: number,
  sendTransaction: (
    address: string,
    amount: number,
    walletId: number,
  ) => SendTransactionRequest,
};

export const Send = ({ walletId, sendTransaction }: Props) => (
  <div>
    <TopBar />
    <CurrencyTabs />
    <SendForm
      onSubmit={values =>
        sendTransaction(values.sendToAddress, values.amountInCrypto, walletId)}
    />
    <BottomNavigation menu={menu} />
  </div>
);

const mapStateToProps = state => ({
  walletId: state.wallet.activeId,
});

const mapDispatchToProps = {
  sendTransaction: sendActions.sendTransactionRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
