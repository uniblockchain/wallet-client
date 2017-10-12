// @flow

import walletActionTypes, {
  type WalletFetchRequest,
  type WalletFetchFail,
  type WalletFetchSuccess,
} from './walletActionTypes';
import type { WalletState } from './walletState';

const walletFetchRequested = (): WalletFetchRequest => ({
  type: walletActionTypes.WALLET_FETCH_REQUESTED,
});
const walletFetchSucceeded = (wallet: WalletState): WalletFetchSuccess => ({
  type: walletActionTypes.WALLET_FETCH_SUCCEEDED,
  wallet,
});
const walletFetchFailed = (error: string): WalletFetchFail => ({
  type: walletActionTypes.WALLET_FETCH_FAILED,
  error,
});

export default {
  walletFetchRequested,
  walletFetchSucceeded,
  walletFetchFailed,
};
