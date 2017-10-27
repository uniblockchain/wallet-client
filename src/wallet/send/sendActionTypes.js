// @flow

import type { SendTransactionResponse } from './sendApi';

const SEND_TRANSACTION_REQUESTED = '@send/SEND_TRANSACTION_REQUESTED';
const SEND_TRANSACTION_SUCCEEDED = '@send/SEND_TRANSACTION_SUCCEEDED';
const SEND_TRANSACTION_FAILED = '@send/SEND_TRANSACTION_FAILED';

export type SendTransactionRequest = {|
  +type: '@send/SEND_TRANSACTION_REQUESTED',
  +address: string,
  +amount: number,
  +walletId: number,
|};

export type SendTransactionSuccess = {|
  +type: '@send/SEND_TRANSACTION_SUCCEEDED',
  +response: SendTransactionResponse,
|};

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
