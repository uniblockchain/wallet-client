// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import walletActions from '../walletActions';
import CurrencyTabs from '../currencyTabs';
import TopBar from '../../ui/topBar';
import BottomNavigation from '../../ui/bottomNavigation';
import AddressBlock from './addressBlock';
import menu from '../../menu';

const styles = theme => ({});

type Props = {
  classes: Object,
  fetchWallet: () => *,
};

export class Receive extends Component<Props> {
  componentDidMount() {
    const { fetchWallet } = this.props;
    if (fetchWallet) {
      fetchWallet();
    }
  }

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

const mapDispatchToProps = {
  fetchWallet: walletActions.walletFetchRequested,
};

const componentWithStyles = withStyles(styles)(Receive);

const reduxComponent: Object => * = connect(undefined, mapDispatchToProps);
export default reduxComponent(componentWithStyles);
