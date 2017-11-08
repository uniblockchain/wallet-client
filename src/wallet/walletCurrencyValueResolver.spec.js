// @flow

import type { MonetaryValues } from './walletState';

const mockStore = {};
jest.mock('../redux/reduxStore', () => mockStore);

const walletCurrencyResolver = require('./walletCurrencyValueResolver').default;

describe('wallet currency resolver', () => {
  it('resolves store wallet currency by default', () => {
    const eurValue = 500;

    mockStore.getState = jest.fn(() => ({
      wallet: {
        currency: 'EUR',
      },
    }));

    const sampleValues: MonetaryValues = [
      {
        currency: 'EUR',
        value: eurValue,
      },
      {
        currency: 'ETH',
        value: 1,
      },
    ];

    const resolvedValue = walletCurrencyResolver.resolve(sampleValues);
    expect(resolvedValue).toEqual(eurValue);
  });

  it('can also resolve the original currency', () => {
    const ethValue = 1;
    const ethereum = 'ETH';

    const sampleValues: MonetaryValues = [
      {
        currency: 'EUR',
        value: 500,
      },
      {
        currency: ethereum,
        value: ethValue,
      },
    ];

    const resolvedValue = walletCurrencyResolver.resolve(
      sampleValues,
      ethereum,
    );
    expect(resolvedValue).toEqual(ethValue);
  });

  it('throws an error when no currency found', () => {
    const sampleValues: MonetaryValues = [
      {
        currency: 'EUR',
        value: 500,
      },
      {
        currency: 'ETH',
        value: 1,
      },
    ];

    expect(() =>
      walletCurrencyResolver.resolve(sampleValues, 's**tcoin'),
    ).toThrow();
  });
});
