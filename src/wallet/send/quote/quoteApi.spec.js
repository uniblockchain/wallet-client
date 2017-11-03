// @flow

import config from 'react-global-configuration';
import type { Quote } from './quoteApi';

jest.mock('../../../http');

const mockHttp = require('../../../http');

const quoteApi = require('./quoteApi').default;

describe('quote api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets a quote', () => {
    const quote: Quote = {
      fromValue: 1,
      fromCurrency: 'ETH',
      toValue: 250,
      toCurrency: 'EUR',
    };
    mockHttp.get = jest.fn(() => Promise.resolve(quote));

    return quoteApi
      .getQuote(quote)
      .then(response => expect(response).toEqual(quote));
  });
});
