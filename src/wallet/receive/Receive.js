// @flow

import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import walletActions from '../walletActions';
import CurrencyTabs from './currencyTabs';
import AddressBlock from './addressBlock';
import TopBar from '../../ui/topBar';

const styles = theme => ({
  top: {
    paddingBottom: 40,
  },
});

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
        <div className={classes.top}>
          <TopBar />
        </div>
        <CurrencyTabs />
        <AddressBlock />
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
