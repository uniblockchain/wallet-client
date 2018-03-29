// @flow

import format from './CurrencyFormatter';

describe('Currency formatter', () => {
  it('formats the currency', () => {
    expect(format(1234.56789, 'EUR')).toEqual('€1,234.57');
  });
});
