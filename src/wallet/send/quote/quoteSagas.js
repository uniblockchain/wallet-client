// @flow
/* global isNaN */
import { change } from 'redux-form';
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import quoteRoutine from './quoteRoutine';
import quoteApi from './quoteApi';

export function* getQuote(action: RoutineAction): Generator<IOEffect, void, *> {
  try {
    const quote = yield call(quoteApi.getQuote, action.payload);
    yield put(quoteRoutine.success(quote));
    if (action.payload.fromValue) {
      yield put(change('send', 'amountInFiat', quote.toValue, true, false));
    }
    if (action.payload.toValue) {
      yield put(change('send', 'amountInCrypto', quote.fromValue, true, false));
    }
  } catch (error) {
    yield put(quoteRoutine.failure(error.message));
    console.error(error);
  }
}

const isNumber = value => {
  const n = Number(value);
  return !Number.isNaN(n);
};

function* validateQuote(action: RoutineAction): Generator<IOEffect, void, *> {
  const quote = action.payload;
  if (!quote.fromValue && !quote.toValue) {
    yield put(quoteRoutine.failure());
  } else if (!isNumber(quote.fromValue) && !quote.toValue) {
    yield put(quoteRoutine.failure());
  } else if (!isNumber(quote.toValue) && !quote.fromValue) {
    yield put(quoteRoutine.failure());
  } else {
    yield call(getQuote, action);
  }
}

function* getQuoteSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(quoteRoutine.TRIGGER, validateQuote);
}

export default getQuoteSaga;
