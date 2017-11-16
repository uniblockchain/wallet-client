// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import sendActions from './sendActions';
import sendActionTypes from './sendActionTypes';
import sendApi from './sendApi';

function* sendTransaction(action) {
  try {
    const response = yield call(
      sendApi.sendTransaction,
      action.address,
      action.amount,
      action.walletId,
    );
    yield put(sendActions.sendTransactionSucceeded(response));
  } catch (error) {
    yield put(sendActions.sendTransactionFailed(error.body.message));
    console.error(error);
  }
}

function* sendTransactionSaga(): Generator<*, *, *> {
  yield takeLatest(sendActionTypes.SEND_TRANSACTION_REQUESTED, sendTransaction);
}

export default sendTransactionSaga;
