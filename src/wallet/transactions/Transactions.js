import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import type { Transaction as TransactionType } from '../walletState';
import { List, Paper } from 'material-ui';
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
  value: number,
};

export class Transactions extends Component<Props, State> {
  render() {
    const { classes } = this.props;
    const { wallets } = this.props;

    return (
      <div className={classes.root}>
        <Paper>
          <List>
            {wallets.map(function(wallet, i) {
              return wallet.transactions.map(
                (transaction: TransactionType, i) => (
                  <Transaction key={transaction.id} transaction={transaction} />
                ),
              );
            })}
          </List>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const componentWithStyles = withStyles(styles)(Transactions);

export default connect(mapStateToProps)(componentWithStyles);
