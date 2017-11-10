// @flow

import React, { Component } from 'react';
import { Grid, ListItem } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import type {
  Transaction as TransactionType,
  TransactionEntry,
} from '../../../wallet/walletState';
import walletCurrencyValueResolver from '../../../wallet/walletCurrencyValueResolver';
import FiatValue from './fiatValue';
import DateDisplay from './dateDisplay';

const styles = () => ({
  root: {
    backgroundColor: '#ffffff',
  },
  address: {
    fontSize: 14,
    color: '#2a2a2a',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    direction: 'rtl',
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
  listItem: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

type Props = {
  classes: Object,
  transaction: TransactionType,
};

function getCurrentWalletTransactionSum(
  transactionEntries: Array<TransactionEntry>,
): ?number {
  return transactionEntries
    .filter(
      (transactionEntry: TransactionEntry) => transactionEntry.currentWallet,
    )
    .map((transactionEntry: TransactionEntry) =>
      walletCurrencyValueResolver.resolve(transactionEntry.value),
    )
    .reduce((sum, value) => sum + value, 0);
}

function getExternalPartyTransactionEntry(
  transactionEntries: Array<TransactionEntry>,
): ?TransactionEntry {
  return transactionEntries.find(
    (transactionEntry: TransactionEntry) => !transactionEntry.currentWallet,
  );
}

export class Transaction extends Component<Props> {
  render() {
    const { classes, transaction } = this.props;

    const { address } =
      getExternalPartyTransactionEntry(transaction.entries) || {};
    const amount = getCurrentWalletTransactionSum(transaction.entries) || 0;

    return (
      <div className={classes.root}>
        <ListItem
          button
          key={transaction.id}
          disableGutters
          className={classes.listItem}
        >
          <Grid item xs={9} sm={9}>
            <div className={classes.address}>{address}</div>
            <div className={classes.date}>
              <DateDisplay date={transaction.date} />
            </div>
          </Grid>
          <Grid item xs={3} sm={3}>
            <div className={classes.amount}>
              <FiatValue value={amount} />
            </div>
            <div className={classes.status}>Completed</div>
          </Grid>
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(Transaction);
