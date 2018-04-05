// @flow

import { formatFiatCurrency, formatCryptoCurrency } from './CurrencyFormatter';

describe('Currency formatter', () => {
  it('formats fiat currencies', () => {
    expect(formatFiatCurrency(1234.56789, 'EUR')).toEqual('€1,234.57');
  });

  it('formats crypto currencies', () => {
    expect(formatCryptoCurrency(0.123456789012345678)).toEqual('0.123457');
  });

  it('returns 0 if no crypto', () => {
    expect(formatCryptoCurrency(0)).toEqual('0');
  });
});
