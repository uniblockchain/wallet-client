// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import CurrencyTabs from '../currencyTabs';
import TopBar from '../../ui/topBar';
import BottomNavigation from '../../ui/bottomNavigation';
import AddressBlock from './addressBlock';
import menu from '../../menu';

const styles = theme => ({});

type Props = {
  classes: Object,
};

export class Receive extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <CurrencyTabs />
        <AddressBlock />
        <BottomNavigation menu={menu} />
      </div>
    );
  }
}

const componentWithStyles = withStyles(styles)(Receive);
export default componentWithStyles;
