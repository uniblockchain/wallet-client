// @flow

import sendActionTypes, {
  type SendTransactionRequest,
  type SendTransactionFail,
  type SendTransactionSuccess,
} from './sendActionTypes';
import type { SendTransactionResponse } from './sendApi';

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

export default {
  sendTransactionRequested,
  sendTransactionSucceeded,
  sendTransactionFailed,
};
