// @flow

import React, { Component } from 'react';
import { Grid, ListItem } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import type { Transaction as TransactionType } from '../../../wallet/walletState';
import walletCurrencyValueResolver from '../../../wallet/walletCurrencyValueResolver';
import FiatValue from './fiatValue';
import DateDisplay from './dateDisplay';
import TransactionDetails from './transactionDetails';

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

type State = {
  showTransactionDetails: boolean,
};

export class Transaction extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showTransactionDetails: false };
  }
  render() {
    const { classes, transaction } = this.props;

    const amount = walletCurrencyValueResolver.resolve(transaction.value);

    return (
      <div className={classes.root}>
        <ListItem
          button
          key={transaction.id}
          disableGutters
          className={classes.listItem}
          onClick={() => this.setState({ showTransactionDetails: true })}
        >
          <Grid item xs={9} sm={9}>
            <div className={classes.address}>{transaction.address}</div>
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
        {this.state.showTransactionDetails && (
          <TransactionDetails
            transaction={transaction}
            onConfirm={() => {
              this.setState({ showTransactionDetails: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Transaction);
