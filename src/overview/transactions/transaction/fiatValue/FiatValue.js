// @flow

import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  expense: {
    color: '#ee583c',
  },
});

type Props = {
  classes: Object,
  value: number,
  currency: string,
};

export const FiatValue = ({ value, currency, classes }: Props) => (
  <div className={value < 0 ? classes.expense : ''}>
    {value.toLocaleString('en-US', {
      style: 'currency',
      currency,
    })}
  </div>
);

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  currency: state.wallet.currency,
});
const componentWithStyles = withStyles(styles)(FiatValue);

export default connect(mapStateToProps)(componentWithStyles);
