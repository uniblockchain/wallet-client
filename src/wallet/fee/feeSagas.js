// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import { sendFeeRoutine, cardOrderFeeRoutine } from './feeRoutines';
import feeApi from './feeApi';
import { pageActions } from '../../page';

function* getSendFee(values) {
  try {
    yield put(pageActions.showProgress(true));
    const { sendToAddress, amountInCrypto, activeWallet } = values.payload;
    yield put(sendFeeRoutine.request());
    const response = yield call(
      feeApi.sendFee,
      sendToAddress,
      amountInCrypto,
      activeWallet.id,
    );
    yield put(sendFeeRoutine.success(response));
    yield put(pageActions.showProgress(false));
  } catch (error) {
    console.error(error);
    yield put(sendFeeRoutine.failure((error.body || {}).message));
    yield put(pageActions.showProgress(false));
  }
}

function* getCardOrderFee(values) {
  try {
    yield put(pageActions.showProgress(true));
    const { activeWallet } = values.payload;
    yield put(cardOrderFeeRoutine.request());
    const response = yield call(feeApi.cardOrderFee, activeWallet.id);
    yield put(cardOrderFeeRoutine.success(response));
    yield put(pageActions.showProgress(false));
  } catch (error) {
    console.error(error);
    yield put(cardOrderFeeRoutine.failure((error.body || {}).message));
    yield put(pageActions.showProgress(false));
  }
}

function* sendFeeSaga(): Generator<*, *, *> {
  yield takeLatest(sendFeeRoutine.TRIGGER, getSendFee);
}

function* cardOrderFeeSaga(): Generator<*, *, *> {
  yield takeLatest(cardOrderFeeRoutine.TRIGGER, getCardOrderFee);
}

export default [sendFeeSaga, cardOrderFeeSaga];
