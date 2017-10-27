// @flow

import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import CurrencyTabs from '../currencyTabs';
import TopBar from '../../ui/topBar';
import BottomNavigation from '../../ui/bottomNavigation';
import AddressBlock from './addressBlock';
import menu from '../../menu';

const styles = () => ({});

type Props = {
  classes: Object,
};

export const Receive = ({ classes }: Props) => (
  <div className={classes.root}>
    <TopBar />
    <CurrencyTabs />
    <AddressBlock /><BottomNavigation menu={menu} />
  </div>
);


const componentWithStyles = withStyles(styles)(Receive);
export default componentWithStyles;
