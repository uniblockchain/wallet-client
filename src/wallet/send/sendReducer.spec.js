// @flow

import sendReducer, { initialSendState } from './sendReducer';
import { sendRoutine, clearRoutine } from './sendRoutines';
import type { SendTransactionResponse } from './sendApi';

describe('send reducer', () => {
  const address = '0xlolwat';
  const amount = 10000;
  const walletId = 1;
  const response: SendTransactionResponse = { transactionStatus: 'signed' };
  const error = 'darn';

  describe('handles send transaction', () => {
    it('request', () => {
      const action = sendRoutine.trigger(address, amount, walletId);
      const newState = sendReducer(initialSendState, action);
      expect(newState).toEqual({ ...initialSendState, isLoading: true });
    });

    it('success', () => {
      const action = sendRoutine.success(response);
      const newState = sendReducer(initialSendState, action);
      expect(newState.transactionStatus).toEqual(response.transactionStatus);
      expect(newState.isLoading).toEqual(false);
    });

    it('fail', () => {
      const action = sendRoutine.failure(error);
      const newState = sendReducer(initialSendState, action);
      expect(newState.isLoading).toEqual(false);
    });

    it('clears transaction status', () => {
      const action = clearRoutine.trigger();
      const newState = sendReducer(
        {
          ...initialSendState,
          transactionStatus: 'yo',
        },
        action,
      );
      expect(newState.transactionStatus).toEqual(
        initialSendState.transactionStatus,
      );
    });
  });
});
