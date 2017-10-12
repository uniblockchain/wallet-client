// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import walletActions from './walletActions';
// import type { WalletFetchRequest } from './walletActionTypes';

type Props = {
  wallets: Array<{}>,
  fetchWallet: void,
};

export class Wallet extends Component<Props> {
  componentDidMount() {
    this.props.fetchWallet();
  }

  render() {
    return <div>yoyoy</div>;
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const mapDispatchToProps = {
  fetchWallet: walletActions.walletFetchRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
