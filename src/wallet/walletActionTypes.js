// @flow

import type { WalletState } from './walletState';

const WALLET_FETCH_REQUESTED = '@wallet/WALLET_FETCH_REQUESTED';
const WALLET_FETCH_SUCCEEDED = '@wallet/WALLET_FETCH_SUCCEEDED';
const WALLET_FETCH_FAILED = '@wallet/WALLET_FETCH_FAILED';

export type WalletFetchRequest = { +type: '@wallet/WALLET_FETCH_REQUESTED' };
export type WalletFetchSuccess = {
  +type: '@wallet/WALLET_FETCH_SUCCEEDED',
  +wallet: WalletState,
};
export type WalletFetchFail = {
  +type: '@wallet/WALLET_FETCH_FAILED',
  +error: string,
};

export type WalletAction =
  | WalletFetchRequest
  | WalletFetchSuccess
  | WalletFetchFail;

export default {
  WALLET_FETCH_REQUESTED,
  WALLET_FETCH_SUCCEEDED,
  WALLET_FETCH_FAILED,
};
