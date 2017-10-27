import { call, put, takeLatest } from 'redux-saga/effects';
import sendApi from './sendApi';
import sendActions from './sendActions';
import sendActionTypes from './sendActionTypes';

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
    yield put(sendActions.sendTransactionFailed(error.message));
    console.error(error);
  }
}

function* sendTransactionSaga() {
  yield takeLatest(sendActionTypes.SEND_TRANSACTION_REQUESTED, sendTransaction);
}

export default sendTransactionSaga;
