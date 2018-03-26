// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppRouter from '../../router';
import { Modal, Progress } from '../../ui';
import CurrencyTabs from '../currencyTabs';
import SendForm from './SendForm';
import { clearRoutine } from './sendRoutines';

type Props = {
  isLoading: boolean,
  transactionStatus: ?string,
  clear: () => void,
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
    this.props.clear();
    this.setState({ redirectToOverview: true });
  };

  getTransactionStatusDescription = (status: string): string => {
    if (status === 'signed' || status === 'accepted') {
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
        <SendForm />
        {this.props.transactionStatus && (
          <Modal
            title="Sent!"
            description={this.getTransactionStatusDescription(
              this.props.transactionStatus,
            )}
            onConfirm={this.onTransactionSentAcknowledgement}
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
  transactionStatus: state.send.transactionStatus,
  isLoading: state.send.isLoading,
});

const mapDispatchToProps = {
  clear: clearRoutine,
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
