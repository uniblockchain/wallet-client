import { Component } from 'react';
import * as React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { connect } from 'react-redux';

export class FiatValue extends Component<Props> {
  render() {
    const value: number = this.props.value;
    const currency: string = this.props.currency;

    return (
      <div>
        {getSymbolFromCurrency(currency)} {Math.round(value * 100) / 100}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.wallet.currency,
});

export default connect(mapStateToProps)(FiatValue);
