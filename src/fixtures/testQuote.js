// @flow

import type { Quote, QuoteCommand } from '../wallet/quote/quoteApi';

export const testQuote: Quote = {
  from: { ETH: 1, EUR: 200 },
  to: { BTC: 2, EUR: 300 },
  fee: { ETH: 0.03, EUR: 100 },
  minAmount: { currency: 'ETH', value: 0.01 },
  maxAmount: { currency: 'ETH', value: 100.23 },
};

export const testQuoteCommand: QuoteCommand = {
  fromWalletId: 1,
  fromValue: 1,
  toCurrency: 'EUR',
};
