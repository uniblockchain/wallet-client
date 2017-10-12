// @flow

import config from 'react-global-configuration';
import { type WalletState } from './walletState';

const mockHttp = jest.genMockFromModule('../http');
jest.mock('../http', () => mockHttp);

const walletApi = require('./walletApi').default;

describe('wallet api', () => {
  const apiUrl = 'sample-api-url';
  const wallet: WalletState = {
    wallets: [
      {
        id: 1,
        address: '59dcc2c2e2d55fcb075e09e8dc5d2723',
        coin: 'ETH',
        balance: null,
      },
    ],
  };
  const error = 'whoops';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches wallet', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(wallet));

    return walletApi.fetchWallet().then(response => {
      expect(response).toEqual(wallet);
    });
  });
});
