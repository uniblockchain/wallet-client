// @flow

import { change } from 'redux-form';
import { call, put } from 'redux-saga/effects';
import quoteActions from './quoteActions';
import type { GetQuoteRequest } from './quoteActionTypes';
import quoteActionTypes from './quoteActionTypes';

import quoteApi, { type Quote } from './quoteApi';
import { getQuote } from './quoteSagas';

describe('quote sagas', () => {
  it('works', () => {
    const quote: Quote = {
      fromValue: 1,
      fromCurrency: 'ETH',
      toValue: 250,
      toCurrency: 'EUR',
    };

    const getQuoteRequest: GetQuoteRequest = {
      type: quoteActionTypes.GET_QUOTE_REQUESTED,
      quote,
    };

    const generator = getQuote(getQuoteRequest);

    expect(generator.next().value).toEqual(call(quoteApi.getQuote, quote));
    expect(generator.next(quote).value).toEqual(
      put(quoteActions.getQuoteSucceeded(quote)),
    );
    expect(generator.next().value).toEqual(
      put(change('send', 'amountInFiat', quote.toValue, true, false)),
    );
    expect(generator.next().value).toEqual(
      put(change('send', 'amountInCrypto', quote.fromValue, true, false)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
