// @flow

import config from 'react-global-configuration';
import { get } from '../../http';
import type { MonetaryValue, MonetaryValuesMap } from '../walletState';

export type QuoteCommand = {|
  fromValue?: number,
  toCurrency: string,
|};

export type Quote = {|
  from: MonetaryValuesMap,
  to: MonetaryValuesMap,
  fee: MonetaryValuesMap,
  minAmount?: MonetaryValue,
  maxAmount?: MonetaryValue,
|};

const getQuote = (fromWalletId: number, quote: QuoteCommand): Promise<Quote> =>
  get(`${config.get('apiUrl')}/v1/wallets/${fromWalletId}/quotes`, quote);

export default { getQuote };
