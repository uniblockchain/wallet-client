// @flow

import config from 'react-global-configuration';
import { get } from '../../http';
import type { MonetaryValue } from '../walletState';

export type QuoteCommand = {|
  fromValue?: number,
  toCurrency: string,
|};

export type Quote = {|
  from: MonetaryValue,
  to: MonetaryValue,
  fee: MonetaryValue,
  minAmount?: number,
  maxAmount?: number,
|};

const getQuote = (fromWalletId: number, quote: QuoteCommand): Promise<Quote> =>
  get(`${config.get('apiUrl')}/v1/wallets/${fromWalletId}/quotes`, quote);

export default { getQuote };
