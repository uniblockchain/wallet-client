// @flow

import sendReducer, { initialSendState } from './sendReducer';
import sendActions from './sendActions';
import type { SendTransactionResponse } from './sendApi';

describe('send reducer', () => {
  const address = '0xlolwat';
  const amount = 10000;
  const walletId = 1;
  const response: SendTransactionResponse = { transactionStatus: 'signed' };
  const error = 'darn';

  describe('handles send transaction', () => {
    it('request', () => {
      const action = sendActions.sendTransactionRequested(
        address,
        amount,
        walletId,
      );
      const newState = sendReducer(initialSendState, action);
      expect(newState).toEqual({ ...initialSendState, isLoading: true });
    });

    it('success', () => {
      const action = sendActions.sendTransactionSucceeded(response);
      const newState = sendReducer(initialSendState, action);
      expect(newState.transactionStatus).toEqual(response.transactionStatus);
      expect(newState.isLoading).toEqual(false);
    });

    it('fail', () => {
      const action = sendActions.sendTransactionFailed(error);
      const newState = sendReducer(initialSendState, action);
      expect(newState.error).toEqual(error);
      expect(newState.isLoading).toEqual(false);
    });
  });
});
