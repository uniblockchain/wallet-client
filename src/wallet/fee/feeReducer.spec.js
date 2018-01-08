// @flow

import feeReducer, { initialFeeState } from './feeReducer';
import { sendFeeRoutine, cardOrderFeeRoutine } from './feeRoutines';

describe('fee reducer', () => {
  const address = '0xlolwat';
  const amount = 10000;
  const walletId = 1;
  const error = 'darn';
  const response = [
    {
      currency: 'ETH',
      value: -0.9,
    },
    {
      currency: 'EUR',
      value: -250.332,
    },
  ];

  describe('handles send fee', () => {
    it('request', () => {
      const action = sendFeeRoutine.trigger(address, amount, walletId);
      const newState = feeReducer(initialFeeState, action);
      expect(newState).toEqual({ ...initialFeeState, isLoading: true });
    });

    it('success', () => {
      const action = sendFeeRoutine.success(response);
      const newState = feeReducer(initialFeeState, action);
      expect(newState.fee).toEqual(response);
      expect(newState.isLoading).toEqual(false);
    });

    it('fail', () => {
      const action = sendFeeRoutine.failure(error);
      const newState = feeReducer(initialFeeState, action);
      expect(newState.isLoading).toEqual(false);
    });
  });

  describe('handles card order fee', () => {
    it('request', () => {
      const action = cardOrderFeeRoutine.trigger(walletId);
      const newState = feeReducer(initialFeeState, action);
      expect(newState).toEqual({ ...initialFeeState, isLoading: true });
    });

    it('success', () => {
      const action = cardOrderFeeRoutine.success(response);
      const newState = feeReducer(initialFeeState, action);
      expect(newState.fee).toEqual(response);
      expect(newState.isLoading).toEqual(false);
    });

    it('fail', () => {
      const action = cardOrderFeeRoutine.failure(error);
      const newState = feeReducer(initialFeeState, action);
      expect(newState.isLoading).toEqual(false);
    });
  });
});
