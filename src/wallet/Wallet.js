// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import walletActions from './walletActions';
import type { WalletFetchRequest } from './walletActionTypes';

type Props = {
  userId: number,
  userEmail: string,
  fetchWallet: () => WalletFetchRequest,
};

export class Wallet extends Component<Props> {
  componentDidMount() {
    this.props.fetchWallet();
  }

  render() {
    const { userId, userEmail } = this.props;

    return <div>yoyoy</div>;
  }
}

const mapStateToProps = state => ({
  id: state.wallet.id,
  address: state.wallet.address,
  coin: state.wallet.coin,
});

const mapDispatchToProps = {
  fetchWallet: walletActions.userFetchRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
