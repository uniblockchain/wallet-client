// @flow

import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Button, LinearProgress } from 'material-ui';

import copy from 'copy-to-clipboard';
import { connect } from 'react-redux';
import type { Wallet } from '../../walletState';
import CurrencyName from '../../CurrencyName';
import withWallet from '../../withWallet';

const styles = () => ({
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

type Props = {
  classes: Object,
  wallets: Array<Wallet>,
  activeWalletId: ?number,
  onCopy: string => void,
};

function getActiveWallet(activeId: ?number, wallets: Array<Wallet>): ?Wallet {
  if (wallets.length) {
    if (activeId) {
      return wallets.find(wallet => wallet.id === activeId);
    }
    return wallets[0];
  }
  return null;
}

export class AddressBlock extends React.Component<Props> {
  render() {
    const activeId: ?number = this.props.activeWalletId;
    const { onCopy, classes, wallets } = this.props;

    const wallet: ?Wallet = getActiveWallet(activeId, wallets);

    if (!wallet) {
      return (
        <div>
          <LinearProgress />
        </div>
      );
    }

    const currencyName: string = CurrencyName.get(
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
            <Button
              onClick={() => {
                onCopy(wallet.receiveAddress);
              }}
              raised
            >
              TAP TO COPY
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  activeWalletId: state.wallet.activeId,
  onCopy: copy,
});

const componentWithStyles = withStyles(styles)(AddressBlock);
const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(componentWithStyles));
