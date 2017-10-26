// @flow

import { Component } from 'react';
import {
  Transaction as TransactionType,
  TransactionEntry,
} from '../../../wallet/walletState';
import walletCurrencyValueResolver from '../../../wallet/walletCurrencyValueResolver';
import { Grid, ListItem } from 'material-ui';
import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import FiatValue from './fiatValue';
import DateDisplay from './dateDisplay';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    // fontFamily: 'Favorit',
  },
  address: {
    fontSize: 14,
    color: '#2a2a2a',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },
  amount: {
    fontSize: 14,
    color: '#2a2a2a',
    overflow: 'hidden',
    textAlign: 'right',
  },
  date: {
    fontSize: 10,
    color: '#a1a1a1',
    overflow: 'hidden',
    lineHeight: 2.2,
    textAlign: 'left',
  },
  status: {
    fontSize: 10,
    color: '#a1a1a1',
    overflow: 'hidden',
    lineHeight: 2.2,
    textAlign: 'right',
  },
});

type Props = {
  classes: Object,
  transaction: TransactionType,
};

export class Transaction extends Component<Props> {
  getCurrentWalletTransactionEntry(
    transactionEntries: Array<TransactionEntry>,
  ): TransactionEntry {
    return transactionEntries.find(
      (transactionEntry: TransactionEntry) => transactionEntry.currentWallet,
    );
  }

  getExternalPartyTransactionEntry(
    transactionEntries: Array<TransactionEntry>,
  ): TransactionEntry {
    return transactionEntries.find(
      (transactionEntry: TransactionEntry) => !transactionEntry.currentWallet,
    );
  }

  render() {
    const { classes } = this.props;
    const transaction: TransactionType = this.props.transaction;
    const self = this;

    const { address } = self.getExternalPartyTransactionEntry(
      transaction.entries,
    );
    const amount = walletCurrencyValueResolver.resolve(
      self.getCurrentWalletTransactionEntry(transaction.entries).value,
    );

    return (
      <div className={classes.root}>
        <ListItem button key={transaction.id}>
          <Grid item xs={6} sm={6}>
            <div className={classes.address}>{address}</div>
            <div className={classes.date}>
              <DateDisplay date={transaction.date} />
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={classes.amount}>
              <FiatValue value={amount} />
            </div>
            <div className={classes.status}>complete</div>
          </Grid>
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(Transaction);
