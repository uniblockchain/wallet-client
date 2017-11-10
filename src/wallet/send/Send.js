// @flow
import React from 'react';
import { connect } from 'react-redux';
import CurrencyTabs from '../currencyTabs';
import sendActions from './sendActions';
import { Modal, Progress } from '../../ui';
import type { SendTransactionRequest } from './sendActionTypes';
import SendForm from './SendForm';

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

export const Send = (props: Props) => {
  const getTransactionSatusDescription = (status: string): string => {
    if (status === 'signed') {
      return 'The transfer is sent!';
    }
    throw new Error('Unknown transaction status');
  };

  return (
    <div>
      <CurrencyTabs />
      <SendForm
        onSubmit={values =>
          props.sendTransaction(
            values.sendToAddress,
            values.amountInCrypto,
            props.walletId,
          )}
      />
      {props.transactionStatus && (
        <Modal
          title="Sent!"
          description={getTransactionSatusDescription(props.transactionStatus)}
          onConfirm={props.clearResponse}
        />
      )}
      {props.error && (
        <Modal
          title="Oops!"
          description={props.error}
          onConfirm={props.clearError}
        />
      )}
      {props.isLoading && (
        <Modal title="Sending!" description="Sending transfer..." type={null}>
          <Progress />
        </Modal>
      )}
    </div>
  );
};

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
