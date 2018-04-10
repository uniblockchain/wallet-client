// @flow

import config from 'react-global-configuration';
import { testQuote, testQuoteCommand } from '../../fixtures';

jest.mock('../../http');

const mockHttp = require('../../http');

const quoteApi = require('./quoteApi').default;

describe('quote api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets a quote', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(testQuote));

    return quoteApi
      .getQuote(testQuoteCommand)
      .then(response => expect(response).toEqual(testQuote));
  });
});
