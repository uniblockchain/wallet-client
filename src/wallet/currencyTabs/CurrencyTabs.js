// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Wallet } from '../walletState';
import walletActions from '../walletActions';
import CurrencyName from '../CurrencyName';
import { Tabs, Tab } from '../../ui';

type Props = {
  wallets: Array<Wallet>,
  setActiveWallet: number => void,
  activeWalletId: ?number,
  fetchWallet: () => *,
};

export class CurrencyTabs extends Component<Props> {
  componentDidMount() {
    const { fetchWallet } = this.props;
    if (fetchWallet) {
      fetchWallet();
    }
  }
  handleChange = (value: string) => {
    this.props.setActiveWallet(Number(value));
  };

  render() {
    const { wallets, activeWalletId } = this.props;

    const value = activeWalletId ? activeWalletId.toString() : undefined;

    return (
      <Tabs value={value} onSelect={this.handleChange}>
        {wallets.map((wallet: Wallet) => (
          <Tab key={wallet.id} value={wallet.id.toString()}>
            {CurrencyName.get(wallet.currency)}
          </Tab>
        ))}
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  activeWalletId: state.wallet.activeId,
});
const mapDispatchToProps = {
  fetchWallet: walletActions.walletFetchRequested,
  setActiveWallet: walletActions.walletSetActive,
};

const reduxComponent: Object => * = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default reduxComponent(CurrencyTabs);
