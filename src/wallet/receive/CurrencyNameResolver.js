// @flow

const resolve = (currency: string): string => {
  if (currency === 'ETH') {
    return 'Ether';
  } else if (currency === 'BTC') {
    return 'Bitcoin';
  } else if (currency === 'XRP') {
    return 'Ripple';
  } else if (currency === 'LTC') {
    return 'Litecoin';
  }
  throw new Error('Unrecognized currency');
};

export default { resolve };
