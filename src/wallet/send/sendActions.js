// @flow

import sendActionTypes, {
  type SendTransactionFail,
  type SendTransactionRequest,
  type SendTransactionSuccess,
} from './sendActionTypes';
import type { SendTransactionResponse } from './sendApi';
import type { ClearError, ClearTransactionStatus } from './sendActionTypes';

const sendTransactionRequested = (
  address: string,
  amount: number,
  walletId: number,
): SendTransactionRequest => ({
  type: sendActionTypes.SEND_TRANSACTION_REQUESTED,
  address,
  amount,
  walletId,
});

const sendTransactionSucceeded = (
  response: SendTransactionResponse,
): SendTransactionSuccess => ({
  type: sendActionTypes.SEND_TRANSACTION_SUCCEEDED,
  response,
});

const sendTransactionFailed = (error: string): SendTransactionFail => ({
  type: sendActionTypes.SEND_TRANSACTION_FAILED,
  error,
});

const clearError = (): ClearError => ({
  type: sendActionTypes.CLEAR_ERROR,
});

const clearTransactionStatus = (): ClearTransactionStatus => ({
  type: sendActionTypes.CLEAR_TRANSACTION_STATUS,
});

export default {
  sendTransactionRequested,
  sendTransactionSucceeded,
  sendTransactionFailed,
  clearError,
  clearTransactionStatus,
};
