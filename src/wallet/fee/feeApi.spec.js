// @flow

import config from 'react-global-configuration';

jest.mock('../../http');

const mockHttp = require('../../http');

const feeApi = require('./feeApi').default;

describe('fee api', () => {
  const apiUrl = 'sample-api-url';

  const feeResponse = [
    {
      currency: 'ETH',
      value: -0.9,
    },
    {
      currency: 'EUR',
      value: -250.332,
    },
  ];

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches send fee', () => {
    const walletId = 1;
    mockHttp.put = jest.fn(() => Promise.resolve(feeResponse));
    feeApi
      .sendFee('0xlolwat', 100.4, walletId)
      .then(response => expect(response).toEqual(feeResponse));
  });

  it('fetches card order fee', () => {
    const walletId = 1;
    mockHttp.put = jest.fn(() => Promise.resolve(feeResponse));
    feeApi
      .cardOrderFee(walletId)
      .then(response => expect(response).toEqual(feeResponse));
  });
});
