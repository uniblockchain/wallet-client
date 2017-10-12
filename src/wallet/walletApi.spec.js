// @flow

import config from 'react-global-configuration';
import { type Wallet } from './walletState';

const mockHttp = jest.genMockFromModule('../http');
jest.mock('../http', () => mockHttp);

const walletApi = require('./walletApi').default;

describe('wallet api', () => {
  const apiUrl = 'sample-api-url';

  const walletsResponse: Array<Wallet> = [
    {
      id: 1,
      address: '59dcc2c2e2d55fcb075e09e8dc5d2723',
      coin: 'ETH',
      balance: null,
    },
  ];

  const error = 'whoops';
  const balance = 500;

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches wallet', () => {
    mockHttp.get = jest.fn();
    mockHttp.get
      .mockReturnValueOnce(Promise.resolve(walletsResponse))
      .mockReturnValueOnce(Promise.resolve(balance));

    return walletApi.fetchWallet().then(response => {
      expect(response).toEqual({
        wallets: [
          {
            ...walletsResponse[0],
            balance,
          },
        ],
      });
    });
  });
});
