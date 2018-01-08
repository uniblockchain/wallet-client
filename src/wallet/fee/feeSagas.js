// @flow
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { sendFeeRoutine, cardOrderFeeRoutine } from './feeRoutines';
import feeApi from './feeApi';
import { pageActions } from '../../page';

export function* getSendFee(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    yield put(pageActions.showProgress(true));
    const { sendToAddress, amountInCrypto, activeWallet } = action.payload;
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

export function* getCardOrderFee(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    yield put(pageActions.showProgress(true));
    const { activeWallet } = action.payload;
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
