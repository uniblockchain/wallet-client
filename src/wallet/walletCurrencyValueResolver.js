// @flow

import type { Value, ValueWithCurrency } from './walletState';

import { store } from '../reduxStore';

function resolve(value: Value): ?number {
  const state = store.getState();
  const activeCurrency = state.wallet.currency;

  const valueWithCurrency = value.find(
    (valueWithCurrency: ValueWithCurrency) =>
      valueWithCurrency.currency === activeCurrency,
  );
  if (valueWithCurrency) {
    return valueWithCurrency.value;
  }

  return null;
}

export default { resolve };
