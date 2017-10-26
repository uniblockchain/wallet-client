// @flow

import config from 'react-global-configuration';
import { type Wallet } from './walletState';

jest.mock('../http');

const mockHttp = require('../http');

const walletApi = require('./walletApi').default;

describe('wallet api', () => {
  const apiUrl = 'sample-api-url';

  const wallet: Wallet = {
    id: 1,
    address: '59dcc2c2e2d55fcb075e09e8dc5d2723',
    currency: 'ETH',
    balance: [],
    transactions: [],
    receiveAddress: '0xlolwat',
  };

  const walletsResponse: Array<Wallet> = [wallet];

  const balance = [
    { currency: 'ETH', value: 0.9 },
    { currency: 'EUR', value: 227.9376254547 },
  ];

  const transactions = [
    {
      id: '59de0dc0bf519ed707b12cb7caf746a2',
      state: 'confirmed',
      date: '2017-10-11T12:25:45.803Z',
      entries: [
        {
          address: '0x1be74bc35c5b9e95ebaa40ac7a35cccd0f52f5a1',
          value: [
            {
              currency: 'ETH',
              value: -0.9,
            },
            {
              currency: 'EUR',
              value: -250.332,
            },
          ],
        },
        {
          address: '0x3c12ae77e4ff9f1f50fe53880d3b62f4a3e8a4ec',
          value: [
            {
              currency: 'ETH',
              value: 0.9,
            },
            {
              currency: 'EUR',
              value: 250.332,
            },
          ],
        },
      ],
    },
    {
      id: '59de09c8e5a485e707a4ddbce9e92ae1',
      state: 'confirmed',
      date: '2017-10-11T12:08:40.905Z',
      entries: [
        {
          address: '0x4d6bb4ed029b33cf25d0810b029bd8b1a6bcab7b',
          value: [
            {
              currency: 'ETH',
              value: -0.9,
            },
            {
              currency: 'EUR',
              value: -250.332,
            },
          ],
        },
        {
          address: '0x1be74bc35c5b9e95ebaa40ac7a35cccd0f52f5a1',
          value: [
            {
              currency: 'ETH',
              value: 0.9,
            },
            {
              currency: 'EUR',
              value: 250.332,
            },
          ],
        },
      ],
    },
  ];

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches wallet', () => {
    mockHttp.get = jest.fn();
    mockHttp.get
      .mockReturnValueOnce(Promise.resolve(walletsResponse))
      .mockReturnValueOnce(Promise.resolve(balance))
      .mockReturnValueOnce(Promise.resolve(transactions));

    return walletApi.fetchWallet().then(response => {
      const firstWallet = response.wallets[0];

      expect(firstWallet.balance).toEqual(balance);

      const firstTransaction = response.wallets[0].transactions[0];
      expect(firstTransaction).toEqual({
        ...firstTransaction,
        date: new Date(transactions[0].date),
      });

      expect(firstWallet.id).toEqual(wallet.id);
      expect(firstWallet.address).toEqual(wallet.address);
      expect(firstWallet.currency).toEqual(wallet.currency);
    });
  });
});
