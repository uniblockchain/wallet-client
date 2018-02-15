// @flow

import type RoutineAction from 'redux-saga-routines';
import { exchangeRoutine } from './exchangeRoutines';
import type { WalletType } from '../walletState';

export type ExchangeState = {
  +toWallet: ?WalletType,
};

export const initialExchangeState: ExchangeState = {
  toWallet: null,
};

const exchangeReducer = (
  state: ExchangeState = initialExchangeState,
  action: RoutineAction,
): ExchangeState => {
  switch (action.type) {
    case exchangeRoutine.TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case exchangeRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case exchangeRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default exchangeReducer;
