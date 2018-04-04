// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Wallet } from '../walletState';
import walletActions from '../walletActions';
import { Modal } from '../../ui';

type Props = {
  wallets: Array<Wallet>,
  error: string,
  fetchWallet: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withWallet = (WrappedComponent: *) => {
  class ComponentWithWallet extends Component<Props> {
    componentWillMount() {
      this.loadWallet();
      console.log('load wallet');
    }

    loadWallet = () => {
      this.props.fetchWallet();
    };

    render() {
      return (
        <div>
          {this.props.error ? (
            <Modal
              title="Oops!"
              description={this.props.error}
              onConfirm={this.loadWallet}
            />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </div>
      );
    }
  }

  ComponentWithWallet.displayName = `withWallet(${getDisplayName(
    WrappedComponent,
  )})`;

  const mapStateToProps = state => ({
    wallets: state.wallet.wallets,
    error: state.wallet.error,
  });

  const mapDispatchToProps = {
    fetchWallet: walletActions.walletFetchRequested,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithWallet);
};

export default withWallet;
