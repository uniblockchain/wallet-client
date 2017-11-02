// @flow

import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import CurrencyTabs from '../currencyTabs';
import AddressBlock from './addressBlock';

const styles = () => ({});

export const Receive = () => (
  <div>
    <CurrencyTabs />
    <AddressBlock />
  </div>
);

const componentWithStyles = withStyles(styles)(Receive);
export default componentWithStyles;
