// @flow

const currencies = {
  ETH: 'Ether',
  BTC: 'Bitcoin',
  XRP: 'Ripple',
  LTC: 'Litecoin',
};

const get = (currency: string): string => {
  if (currencies[currency]) {
    return currencies[currency];
  }
  console.error('Unrecognized currency', currency);
  return currency;
};

export default { get };
