// @flow

import type { SendTransactionResponse } from './sendApi';

const SEND_TRANSACTION_REQUESTED = '@send/SEND_TRANSACTION_REQUESTED';
export type SendTransactionRequest = {|
  +type: '@send/SEND_TRANSACTION_REQUESTED',
  +address: string,
  +amount: number,
  +walletId: number,
|};

const SEND_TRANSACTION_SUCCEEDED = '@send/SEND_TRANSACTION_SUCCEEDED';
export type SendTransactionSuccess = {|
  +type: '@send/SEND_TRANSACTION_SUCCEEDED',
  +response: SendTransactionResponse,
|};

const SEND_TRANSACTION_FAILED = '@send/SEND_TRANSACTION_FAILED';
export type SendTransactionFail = {|
  +type: '@send/SEND_TRANSACTION_FAILED',
  +error: string,
|};

export type SendAction =
  | SendTransactionRequest
  | SendTransactionSuccess
  | SendTransactionFail;

export default {
  SEND_TRANSACTION_REQUESTED,
  SEND_TRANSACTION_SUCCEEDED,
  SEND_TRANSACTION_FAILED,
};
