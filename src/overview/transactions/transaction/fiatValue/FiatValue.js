import { Component } from 'react';
import * as React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  expense: {
    color: '#ee583c',
  },
});

type Props = {
  classes?: Object,
  value: number,
};

type State = {
  currency: string,
};

export class FiatValue extends Component<Props, State> {
  render() {
    const value: number = this.props.value;
    const currency: string = this.props.currency;
    const { classes } = this.props;

    return (
      <div className={value < 0 ? classes.expense : ''}>
        {getSymbolFromCurrency(currency)}
        {Math.round(value * 100) / 100}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.wallet.currency,
});
const componentWithStyles = withStyles(styles)(FiatValue);

export default connect(mapStateToProps)(componentWithStyles);
