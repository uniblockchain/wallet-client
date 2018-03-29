// @flow

const formatCurrency = (fiatAmount: number, fiatCurrency: string): string => {
  return fiatAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: fiatCurrency,
  });
};

export default formatCurrency;
