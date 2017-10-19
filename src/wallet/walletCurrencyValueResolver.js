// @flow

import type { MonetaryValues, MonetaryValue } from './walletState';

import store from '../reduxStore';

function resolve(
  monetaryValues: MonetaryValues,
  currency: string = store.getState().wallet.currency,
): number {
  const valueWithCurrency = monetaryValues.find(
    (value: MonetaryValue) => value.currency === currency,
  );

  if (valueWithCurrency) {
    return valueWithCurrency.value;
  }

  throw new Error(`Currency ${currency} not found`);
}

export default { resolve };
