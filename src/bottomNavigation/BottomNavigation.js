// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import AccountBalanceIcon from 'material-ui-icons/AccountBalance';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import AppsIcon from 'material-ui-icons/Apps';

const styles = {
  root: {
    width: '100%',
  },
};

type Props = {
  classes?: Object,
};

type State = {
  value: number,
};

class SimpleBottomNavigation extends Component<Props, State> {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationButton label="Overview" icon={<HomeIcon />} />
        <BottomNavigationButton label="Wallet" icon={<AccountBalanceIcon />} />
        <BottomNavigationButton label="Card" icon={<CreditCardIcon />} />
        <BottomNavigationButton label="Marketplace" icon={<AppsIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(SimpleBottomNavigation);
