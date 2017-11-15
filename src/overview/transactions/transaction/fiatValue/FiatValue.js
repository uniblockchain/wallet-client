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
  inline: ?boolean,
  noColor: ?boolean,
};

export const FiatValue = ({
  value,
  currency,
  classes,
  inline,
  noColor,
}: Props) => {
  const Element = inline ? 'span' : 'div';
  return (
    <Element className={value < 0 && !noColor ? classes.expense : ''}>
      {value.toLocaleString('en-US', {
        style: 'currency',
        currency,
      })}
    </Element>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  currency: state.wallet.currency,
});
const componentWithStyles = withStyles(styles)(FiatValue);

export default connect(mapStateToProps)(componentWithStyles);
