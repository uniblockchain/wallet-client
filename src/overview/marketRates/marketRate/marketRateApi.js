// @flow

import config from 'react-global-configuration';
import { get } from '../../../http/index';

export type Rate = {
  fromValue: number,
  fromCurrency: string,
  toValue: number,
  toCurrency: string,
};

export type CurrencyExchangeRate = {
  fromCurrency: string,
  toCurrency: string,
  exchangeRate: number,
};

export const getMarketRate = (
  fromCurrency: string,
  toCurrency: string,
): Promise<CurrencyExchangeRate> =>
  get(
    `${config.get(
      'apiUrl',
    )}/v1/rates?fromCurrency=${fromCurrency}&fromValue=1&toCurrency=${toCurrency}`,
  ).then((rate: Rate) => ({
    fromCurrency: rate.fromCurrency,
    toCurrency: rate.toCurrency,
    exchangeRate: rate.toValue,
  }));

export default { getMarketRate };
