// @flow

import * as React from 'react';
import { Component } from 'react';
import { withStyles } from 'material-ui/styles/index';
import { Button, LinearProgress } from 'material-ui';
import { connect } from 'react-redux';
import type { Wallet } from '../../walletState';
import CurrencyNameResolver from '../CurrencyNameResolver';

const styles = theme => ({
  addressContainer: {
    backgroundColor: '#f2f2f2',
  },
  addressIntro: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#02bda5',
    // fontFamily: 'Favorit',
    margin: 16,
  },
  address: {
    // fontFamily: 'Favorit',
    fontSize: 16,
    textAlign: 'center',
    color: '#686868',
  },
  tapToCopyRow: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  hero: {
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#ffffff',
    // fontFamily: 'CircularStd',
    fontSize: 36,
    color: '#00346b',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
  },
});

// $FlowFixMe
type Props = {
  classes: Object,
  wallets: Array<Wallet>,
  activeWalletId: ?number,
};

function getActiveWallet(activeId: ?number, wallets: Array<Wallet>): ?Wallet {
  if (wallets.length) {
    if (activeId) {
      return wallets.find(wallet => wallet.id === activeId);
    } else {
      return wallets[0];
    }
  }
}

export class AddressBlock extends Component<Props> {
  render() {
    const { classes } = this.props;
    const activeId: ?number = this.props.activeWalletId;
    const wallets: Array<Wallet> = this.props.wallets;

    const wallet: ?Wallet = getActiveWallet(activeId, wallets);

    if (!wallet) {
      // $FlowFixMe
      return (
        <div>
          <LinearProgress />
        </div>
      );
    }

    const currencyName: string = CurrencyNameResolver.resolve(
      wallet.currency,
    ).toUpperCase();

    return (
      <div>
        <div className={classes.hero}>DEPOSIT {currencyName}</div>
        <div className={classes.addressContainer}>
          <div className={classes.addressIntro}>
            YOUR {currencyName} ADDRESS
          </div>
          <div className={classes.address}>{wallet.receiveAddress}</div>
          <div className={classes.tapToCopyRow}>
            {/* // $FlowFixMe */}
            <Button raised>TAP TO COPY</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  activeWalletId: state.wallet.activeId,
});

const componentWithStyles = withStyles(styles)(AddressBlock);

// $FlowFixMe
const reduxComponent = connect(mapStateToProps);
export default reduxComponent(componentWithStyles);
