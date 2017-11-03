// @flow

import { change } from 'redux-form';
import { call, type IOEffect, put, takeLatest } from 'redux-saga/effects';
import quoteActions from './quoteActions';
import quoteActionTypes, { type GetQuoteRequest } from './quoteActionTypes';
import quoteApi from './quoteApi';

export function* getQuote(
  action: GetQuoteRequest,
): Generator<IOEffect, void, *> {
  try {
    const quote = yield call(quoteApi.getQuote, action.quote);
    yield put(quoteActions.getQuoteSucceeded(quote));
    yield put(change('send', 'amountInFiat', quote.toValue, true, false));
    yield put(change('send', 'amountInCrypto', quote.fromValue, true, false));
  } catch (error) {
    yield put(quoteActions.getQuoteFailed(error.message));
    console.error(error);
  }
}

function* getQuoteSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(quoteActionTypes.GET_QUOTE_REQUESTED, getQuote);
}

export default getQuoteSaga;
