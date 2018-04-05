// @flow

export const formatFiatCurrency = (
  fiatAmount: number,
  fiatCurrency: string,
): string =>
  fiatAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: fiatCurrency,
  });

export const formatCryptoCurrency = (amount: number): string =>
  amount ? amount.toFixed(6) : '0';
