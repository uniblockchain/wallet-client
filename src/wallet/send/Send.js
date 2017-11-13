// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyTabs from '../currencyTabs';
import sendActions from './sendActions';
import { Modal, Progress } from '../../ui';
import type { SendTransactionRequest } from './sendActionTypes';
import SendForm from './SendForm';
import AppRouter from '../../router';

type Props = {
  walletId: number,
  error: ?string,
  isLoading: boolean,
  transactionStatus: ?string,
  sendTransaction: (
    address: string,
    amount: number,
    walletId: number,
  ) => SendTransactionRequest,
  clearResponse: () => void,
  clearError: () => void,
};

type State = {
  redirectToOverview: boolean,
};

export class Send extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { redirectToOverview: false };
  }

  onTransactionSentAcknowledgement = (): void => {
    this.props.clearResponse();
    this.setState({ redirectToOverview: true });
  };

  getTransactionSatusDescription = (status: string): string => {
    if (status === 'signed') {
      return 'The transfer is sent!';
    }
    throw new Error('Unknown transaction status');
  };

  render() {
    if (this.state.redirectToOverview) {
      return <AppRouter wallet />;
    }

    return (
      <div>
        <CurrencyTabs />
        <SendForm
          onSubmit={values =>
            this.props.sendTransaction(
              values.sendToAddress,
              values.amountInCrypto,
              this.props.walletId,
            )}
        />
        {this.props.transactionStatus && (
          <Modal
            title="Sent!"
            description={this.getTransactionSatusDescription(
              this.props.transactionStatus,
            )}
            onConfirm={this.onTransactionSentAcknowledgement}
          />
        )}
        {this.props.error && (
          <Modal
            title="Oops!"
            description={this.props.error}
            onConfirm={this.props.clearError}
          />
        )}
        {this.props.isLoading && (
          <Modal title="Sending!" description="Sending transfer..." type={null}>
            <Progress />
          </Modal>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  walletId: state.wallet.activeId,
  error: state.send.error,
  transactionStatus: state.send.transactionStatus,
  isLoading: state.send.isLoading,
});

const mapDispatchToProps = {
  sendTransaction: sendActions.sendTransactionRequested,
  clearError: sendActions.clearError,
  clearResponse: sendActions.clearTransactionStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
