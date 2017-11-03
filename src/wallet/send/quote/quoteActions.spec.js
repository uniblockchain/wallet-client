// @flow

import quoteActions from './quoteActions';
import quoteActionTypes from './quoteActionTypes';

describe('quote actions', () => {
  it('can request a quote', () => {
    const quote = {
      fromValue: 1,
      fromCurrency: 'ETH',
      toCurrency: 'EUR',
    };

    const action = quoteActions.getQuoteRequested(quote);

    expect(action).toEqual({
      type: quoteActionTypes.GET_QUOTE_REQUESTED,
      quote,
    });
  });

  it('can receive a quote', () => {
    const quote = {
      fromValue: 1,
      fromCurrency: 'ETH',
      toValue: 250,
      toCurrency: 'EUR',
    };

    const action = quoteActions.getQuoteSucceeded(quote);

    expect(action).toEqual({
      type: quoteActionTypes.GET_QUOTE_SUCCEEDED,
      quote,
    });
  });

  it('can get an error when getting a quote', () => {
    const error = 'dam!';

    const action = quoteActions.getQuoteFailed(error);

    expect(action).toEqual({
      type: quoteActionTypes.GET_QUOTE_FAILED,
      error,
    });
  });
});
