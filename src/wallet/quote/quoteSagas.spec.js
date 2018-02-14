// @flow

import { change } from 'redux-form';
import { call, put } from 'redux-saga/effects';
import quoteRoutine from './quoteRoutine';

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

    const generator = getQuote(quoteRoutine(quote));

    expect(generator.next().value).toEqual(call(quoteApi.getQuote, quote));
    expect(generator.next(quote).value).toEqual(
      put(quoteRoutine.success(quote)),
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
