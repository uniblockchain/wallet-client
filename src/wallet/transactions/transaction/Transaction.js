import { Component } from 'react';
import {
  Transaction as TransactionType,
  TransactionEntry,
} from '../../walletState';
import walletCurrencyValueResolver from '../../walletCurrencyValueResolver';
import { Grid, ListItem } from 'material-ui';
import * as React from 'react';
import { withStyles } from 'material-ui/styles/index';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    fontFamily: 'Favorit',
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

    return (
      <div className={classes.root}>
        <ListItem button key={transaction.id}>
          <Grid item xs={6} sm={6}>
            <div className={classes.address}>
              {
                self.getExternalPartyTransactionEntry(transaction.entries)
                  .address
              }
            </div>
            <div className={classes.date}>{transaction.date.toString()}</div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={classes.amount}>
              {walletCurrencyValueResolver.resolve(
                self.getCurrentWalletTransactionEntry(transaction.entries)
                  .value,
              )}
            </div>
            <div className={classes.status}>complete</div>
          </Grid>
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(Transaction);
