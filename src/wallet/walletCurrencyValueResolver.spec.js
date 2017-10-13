// @flow

// import { store } from '../reduxStore';
import type { Value } from './walletState';

const mockStore = {};
jest.mock('../reduxStore', () => mockStore);

const walletCurrencyResolver = require('./walletCurrencyValueResolver').default;

describe('wallet currency resolver', () => {
  it('resolve', () => {
    const eurValue = 500;

    mockStore.getState = jest.fn(() => ({
      wallet: {
        currency: 'EUR',
      },
    }));

    const sampleValue: Value = [
      {
        currency: 'EUR',
        value: eurValue,
      },
      {
        currency: 'ETH',
        value: 1,
      },
    ];

    const resolvedValue = walletCurrencyResolver.resolve(sampleValue);
    expect(resolvedValue).toEqual(eurValue);
  });
});
