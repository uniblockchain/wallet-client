// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Wallet } from '../walletState';
import walletActions from '../walletActions';

type Props = {
  +wallets: Array<Wallet>,
  +fetchWallet: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withWallet = (WrappedComponent: *) => {
  class ComponentWithWallet extends Component<Props> {
    componentWillMount() {
      this.checkIfWalletIsLoaded(this.props.wallets);
    }

    componentWillReceiveProps(nextProps) {
      this.checkIfWalletIsLoaded(nextProps.wallets);
    }

    checkIfWalletIsLoaded(wallets: Array<Wallet>) {
      const isWalletLoaded = wallets.length > 0;
      if (!isWalletLoaded) {
        this.props.fetchWallet();
      }
    }

    render() {
      return <div>{<WrappedComponent {...this.props} />}</div>;
    }
  }

  ComponentWithWallet.displayName = `withWallet(${getDisplayName(
    WrappedComponent,
  )})`;

  const mapStateToProps = state => ({
    wallets: state.wallet.wallets,
  });

  const mapDispatchToProps = {
    fetchWallet: walletActions.walletFetchRequested,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithWallet);
};

export default withWallet;
