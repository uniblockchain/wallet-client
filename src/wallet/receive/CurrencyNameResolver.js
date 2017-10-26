// @flow

import cryptocurrencies from 'cryptocurrencies';

const resolve = (currency: string): string => {
  if (currency === 'ETH') {
    return 'Ether';
  } else {
    return cryptocurrencies[currency];
  }
};

export default { resolve };
