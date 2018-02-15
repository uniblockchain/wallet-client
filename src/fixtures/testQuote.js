// @flow

import type { Quote, QuoteCommand } from '../wallet/quote/quoteApi';

export const testQuote: Quote = {
  from: { currency: 'ETH', value: 1 },
  to: { currency: 'EUR', value: 200 },
  fee: { currency: 'ETH', value: 0.03 },
  minAmount: 0.01,
  maxAmount: 100.23,
};

export const testQuoteCommand: QuoteCommand = {
  fromValue: 1,
  toCurrency: 'EUR',
};
