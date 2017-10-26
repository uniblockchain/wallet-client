// @flow

import config from 'react-global-configuration';
import type { SendTransactionResponse } from './sendApi';

jest.mock('../http');

const mockHttp = require('../http');

const sendApi = require('./sendApi').default;

describe('send api', () => {
  const apiUrl = 'sample-api-url';
  const sendTransactionResponse: SendTransactionResponse = {
    transactionStatus: 'signed',
  };
  const address = '0xlolwat';
  const amount = 10000;
  const walletId = 1;

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('sends a transaction', () => {
    mockHttp.post = jest.fn(() => Promise.resolve(sendTransactionResponse));

    return sendApi
      .sendTransaction(address, amount, walletId)
      .then(response => expect(response).toEqual(sendTransactionResponse));
  });
});
