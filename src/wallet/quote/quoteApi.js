// @flow

import config from 'react-global-configuration';
import { get } from '../../http';

export type Quote = {
  fromValue?: number,
  fromCurrency: string,
  toValue?: number,
  toCurrency: string,
};

const getQuote = (quote: Quote): Promise<Quote> =>
  get(`${config.get('apiUrl')}/v1/quotes`, quote);

export default { getQuote };
