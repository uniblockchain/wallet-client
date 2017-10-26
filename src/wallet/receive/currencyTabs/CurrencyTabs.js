// @flow

import { Component } from 'react';
import * as React from 'react';
import { Tabs, Tab } from 'material-ui';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles/index';
import type { Wallet } from '../../walletState';
import walletActions from '../../walletActions';
import CurrencyNameResolver from './../CurrencyNameResolver';

const styles = theme => ({});

type Props = {
  classes: Object,
  wallets: Array<Wallet>,
  setActiveWallet: number => void,
  activeWalletId: ?number,
};

export class CurrencyTabs extends Component<Props> {
  handleChange = (event: Object, value: number) => {
    const wallet = this.props.wallets[value];
    this.props.setActiveWallet(wallet.id);
  };

  render() {
    const { classes } = this.props;
    const activeId: ?number = this.props.activeWalletId;
    const wallets: Array<Wallet> = this.props.wallets;

    let tabIndex = 0;
    if (activeId && wallets.length) {
      tabIndex = wallets.findIndex(wallet => wallet.id === activeId);
    }

    return (
      <div className={classes.root}>
        <div position="static" color="default">
          <Tabs
            centered={true}
            value={tabIndex}
            onChange={this.handleChange}
            indicatorColor="#02bda5"
            textColor="#02bda5"
            // scrollable
            // scrollButtons="auto"
          >
            {wallets.map((wallet: Wallet) => (
              // $FlowFixMe
              <Tab
                key={wallet.id}
                label={CurrencyNameResolver.resolve(wallet.currency)}
              />
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  activeWalletId: state.wallet.activeId,
});
const mapDispatchToProps = {
  setActiveWallet: walletActions.walletSetActive,
};

const componentWithStyles = withStyles(styles)(CurrencyTabs);

const reduxComponent: Object => * = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default reduxComponent(componentWithStyles);
