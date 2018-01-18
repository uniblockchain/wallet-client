// @flow

import config from 'react-global-configuration';
import type { WalletType } from './walletState';
import { testWallet } from '../fixtures';

jest.mock('../http');

const mockHttp = require('../http');

const walletApi = require('./walletApi').default;

describe('wallet api', () => {
  const apiUrl = 'sample-api-url';

  const walletsResponse: Array<WalletType> = [testWallet];

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches wallet', () => {
    mockHttp.get = jest.fn();
    mockHttp.get.mockReturnValueOnce(Promise.resolve(walletsResponse));

    return walletApi.fetchWallet().then(response => {
      const firstWallet = response.wallets[0];

      const firstTransaction = response.wallets[0].transactions[0];
      expect(firstTransaction).toEqual({
        ...firstTransaction,
        date: new Date('2017-10-11T12:25:45.803Z'),
      });

      expect(firstWallet.id).toEqual(testWallet.id);
      expect(firstWallet.address).toEqual(testWallet.address);
      expect(firstWallet.currency).toEqual(testWallet.currency);
    });
  });
});
