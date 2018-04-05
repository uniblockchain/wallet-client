// @flow

import React, { Component } from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { type CurrencyExchangeRate, getMarketRate } from './marketRateApi';
import { formatFiatCurrency } from '../../../currency';

export type Props = {
  fromCurrency: string,
  toCurrency: ?string,
};

export type State = {
  exchangeRate: ?number,
};

export class MarketRate extends Component<Props, State> {
  state = {
    exchangeRate: undefined,
  };

  componentWillMount() {
    this.getFreshExchangeRate();
    setInterval(() => this.getFreshExchangeRate(), 5000);
  }

  getFreshExchangeRate() {
    if (this.props.toCurrency != null) {
      getMarketRate(this.props.fromCurrency, this.props.toCurrency).then(
        (rate: CurrencyExchangeRate) => {
          this.setState({ exchangeRate: rate.exchangeRate });
        },
      );
    }
  }

  render() {
    if (this.props.toCurrency == null || this.state.exchangeRate == null) {
      return null;
    }
    return (
      <div>
        {formatFiatCurrency(this.state.exchangeRate, this.props.toCurrency)}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  toCurrency: state.wallet ? state.wallet.currency : undefined,
});

export default connect(mapStateToProps)(MarketRate);
