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
  } else {
    new Error('Unrecognized currency');
    return '';
  }
};

export default { resolve };
