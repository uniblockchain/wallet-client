// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import type { MapStateToProps } from 'react-redux';
import type {
  Transaction as TransactionType,
  Wallet,
} from '../../wallet/walletState';
import Transaction from './transaction';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
  },
});

type Props = {
  classes: Object,
  wallets: Array<Wallet>,
};

type State = {
  wallets: Array<Wallet>,
};

export class Transactions extends Component<Props, State> {
  render() {
    const { classes } = this.props;
    const { wallets } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {wallets.map((wallet: Wallet) =>
            wallet.transactions.map((transaction: TransactionType) => (
              <Transaction key={transaction.id} transaction={transaction} />
            )),
          )}
        </List>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const componentWithStyles = withStyles(styles)(Transactions);

export default connect(mapStateToProps)(componentWithStyles);
