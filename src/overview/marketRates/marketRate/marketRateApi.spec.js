// @flow

import config from 'react-global-configuration';
import { type CurrencyExchangeRate } from './marketRateApi';

jest.mock('../../../http');

const mockHttp = require('../../../http');
const marketRateApi = require('./marketRateApi').default;

describe('market rate api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets an exchange rate for a currency', () => {
    mockHttp.get = jest.fn(() =>
      Promise.resolve({
        fromValue: 1,
        fromCurrency: 'BTC',
        toValue: 6709,
        toCurrency: 'EUR',
      }),
    );

    const exchangeRate: CurrencyExchangeRate = {
      fromCurrency: 'BTC',
      toCurrency: 'EUR',
      exchangeRate: 6709,
    };

    return marketRateApi
      .getMarketRate('BTC', 'EUR')
      .then(response => expect(response).toEqual(exchangeRate));
  });
});
