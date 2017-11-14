// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import type { MapStateToProps } from 'react-redux';
import type {
  Transaction as TransactionType,
  WalletType,
} from '../../wallet/walletState';
import Transaction from './transaction';

const styles = () => ({
  root: {
    backgroundColor: '#ffffff',
  },
});

type Props = {
  classes: Object,
  transactions: Array<TransactionType>,
};

export const TransactionsWithoutStyles = ({ classes, transactions }: Props) => (
  <div className={classes.root}>
    <List>
      {transactions.map((transaction: TransactionType) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </List>
  </div>
);

export const Transactions = withStyles(styles)(TransactionsWithoutStyles);

const getSortedTransactions = (
  wallets: Array<WalletType>,
): Array<TransactionType> => {
  const transactionLists = wallets.map(wallet => wallet.transactions);
  const transactions = [].concat(...transactionLists);
  transactions.sort(
    (transaction1, transaction2) => transaction2.date - transaction1.date,
  );
  return transactions;
};

export const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  transactions: state.wallet ? getSortedTransactions(state.wallet.wallets) : [],
});

export default connect(mapStateToProps)(Transactions);
