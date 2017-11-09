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
  wallets: Array<WalletType>,
};

export const TransactionsWithoutStyles = ({ classes, wallets }: Props) => (
  <div className={classes.root}>
    <List>
      {wallets.map((wallet: WalletType) =>
        wallet.transactions.map((transaction: TransactionType) => (
          <Transaction key={transaction.id} transaction={transaction} />
        )),
      )}
    </List>
  </div>
);

export const Transactions = withStyles(styles)(TransactionsWithoutStyles);

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

export default connect(mapStateToProps)(Transactions);
