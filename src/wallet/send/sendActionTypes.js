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

const CLEAR_ERROR = '@send/CLEAR_ERROR';
export type ClearError = {|
  +type: '@send/CLEAR_ERROR',
|};

const CLEAR_TRANSACTION_STATUS = '@send/CLEAR_TRANSACTION_STATUS';
export type ClearTransactionStatus = {|
  +type: '@send/CLEAR_TRANSACTION_STATUS',
|};

export type SendAction =
  | SendTransactionRequest
  | SendTransactionSuccess
  | SendTransactionFail
  | ClearError
  | ClearTransactionStatus;

export default {
  SEND_TRANSACTION_REQUESTED,
  SEND_TRANSACTION_SUCCEEDED,
  SEND_TRANSACTION_FAILED,
  CLEAR_ERROR,
  CLEAR_TRANSACTION_STATUS,
};
