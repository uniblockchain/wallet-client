// @flow

import { type WalletState, initialWalletState } from './walletState';
import walletAction, { type WalletAction } from './walletActionTypes';

const walletReducer = (
  state: WalletState = initialWalletState,
  action: WalletAction,
): WalletState => {
  switch (action.type) {
    case walletAction.WALLET_FETCH_REQUESTED:
      return {
        ...state,
      };

    case walletAction.WALLET_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.wallet,
      };

    case walletAction.WALLET_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default walletReducer;
