// @flow
/* global isNaN */
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import quoteRoutine from './quoteRoutine';
import quoteApi from './quoteApi';

export function* getQuote(action: RoutineAction): Generator<IOEffect, void, *> {
  try {
    const { fromWalletId, quote } = action.payload;
    const quoteResponse = yield call(quoteApi.getQuote, fromWalletId, quote);
    yield put(quoteRoutine.success(quoteResponse));
  } catch (error) {
    console.error(error);
    yield put(quoteRoutine.failure((error.body || {}).message));
  }
}

const isNumber = value => {
  const n = Number(value);
  return !Number.isNaN(n);
};

function* validateQuote(action: RoutineAction): Generator<IOEffect, void, *> {
  const { quote } = action.payload;
  if (!quote.fromValue) {
    yield put(quoteRoutine.failure('Amount missing for quote'));
  } else if (!quote.toCurrency) {
    yield put(quoteRoutine.failure('Target currency missing for quote'));
  } else if (!isNumber(quote.fromValue)) {
    yield put(quoteRoutine.failure('Amount is not a number'));
  } else {
    yield call(getQuote, action);
  }
}

function* getQuoteSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(quoteRoutine.TRIGGER, validateQuote);
}

export default getQuoteSaga;
