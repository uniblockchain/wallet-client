// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { Card, List } from 'material-ui';
import type { Transaction as TransactionType, Wallet } from '../walletState';
import Transaction from './transaction';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
  },
});

type Props = {
  classes?: Object,
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
        <Card>
          <List>
            {wallets.map((wallet: Wallet) =>
              wallet.transactions.map((transaction: TransactionType) => (
                <Transaction key={transaction.id} transaction={transaction} />
              )),
            )}
          </List>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const componentWithStyles = withStyles(styles)(Transactions);

export default connect(mapStateToProps)(componentWithStyles);
