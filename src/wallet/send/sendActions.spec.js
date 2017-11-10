// @flow

import sendActionTypes from './sendActionTypes';
import sendActions from './sendActions';

describe('Send actions', () => {
  it('can send a transaction request', () => {
    const address = '0xlolwat';
    const amount = 10000;
    const walletId = 1;

    const action = sendActions.sendTransactionRequested(
      address,
      amount,
      walletId,
    );

    expect(action).toEqual({
      type: sendActionTypes.SEND_TRANSACTION_REQUESTED,
      address,
      amount,
      walletId,
    });
  });

  it('can send a transaction succeeded message', () => {
    const response = { transactionStatus: 'signed' };

    const action = sendActions.sendTransactionSucceeded(response);

    expect(action).toEqual({
      type: sendActionTypes.SEND_TRANSACTION_SUCCEEDED,
      response,
    });
  });

  it('can send a transaction error message', () => {
    const error = 'darn';

    const action = sendActions.sendTransactionFailed(error);

    expect(action).toEqual({
      type: sendActionTypes.SEND_TRANSACTION_FAILED,
      error,
    });
  });

  it('can clear transaction error message', () => {
    const action = sendActions.clearError();

    expect(action).toEqual({
      type: sendActionTypes.CLEAR_ERROR,
    });
  });

  it('can clear transaction status', () => {
    const action = sendActions.clearTransactionStatus();

    expect(action).toEqual({
      type: sendActionTypes.CLEAR_TRANSACTION_STATUS,
    });
  });
});
