// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import OverviewIcon from './icon/OverviewIcon';
import WalletIcon from './icon/WalletIcon';
import CardIcon from './icon/CardIcon';
import MarketplaceIcon from './icon/MarketplaceIcon';

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
        <BottomNavigationButton label="Overview" icon={<OverviewIcon />} />
        <BottomNavigationButton label="Wallet" icon={<WalletIcon />} />
        <BottomNavigationButton label="Card" icon={<CardIcon />} />
        <BottomNavigationButton
          label="Marketplace"
          icon={<MarketplaceIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(SimpleBottomNavigation);
