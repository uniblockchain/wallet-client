// @flow

import { call, put } from 'redux-saga/effects';
import quoteRoutine from './quoteRoutine';

import quoteApi from './quoteApi';
import { getQuote } from './quoteSagas';
import { testQuote, testQuoteCommand } from '../../fixtures';

describe('quote sagas', () => {
  it('works', () => {
    const generator = getQuote(
      quoteRoutine({ fromWalletId: 1, quote: testQuoteCommand }),
    );

    expect(generator.next().value).toEqual(
      call(quoteApi.getQuote, 1, testQuoteCommand),
    );
    expect(generator.next(testQuote).value).toEqual(
      put(quoteRoutine.success(testQuote)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
