// @flow

import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import type { Wallet } from '../walletState';
import walletActions from '../walletActions';
import CurrencyNameResolver from '../receive/CurrencyNameResolver';
import { Card } from '../../ui';

const styles = {
  label: {
    textTransform: 'none',
  },
};

type Props = {
  wallets: Array<Wallet>,
  setActiveWallet: number => void,
  activeWalletId: ?number,
  fetchWallet: () => *,
};

const CurrencyTabsCard = Card.extend`
  background-color: ${props => props.theme.background};
  padding-bottom: 0;
`;

export class CurrencyTabs extends Component<Props> {
  componentDidMount() {
    const { fetchWallet } = this.props;
    if (fetchWallet) {
      fetchWallet();
    }
  }
  handleChange = (event: Object, value: number) => {
    const wallet = this.props.wallets[value];
    this.props.setActiveWallet(wallet.id);
  };

  render() {
    const { wallets, activeWalletId } = this.props;

    let tabIndex = 0;
    if (activeWalletId && wallets.length) {
      tabIndex = wallets.findIndex(wallet => wallet.id === activeWalletId);
    }

    return (
      <CurrencyTabsCard>
        <Tabs
          centered
          value={tabIndex}
          onChange={this.handleChange}
          indicatorColor="#02bda5"
          textColor="#02bda5"
        >
          {wallets.map((wallet: Wallet) => (
            <Tab
              classes={{ label: this.props.classes.label }}
              key={wallet.id}
              label={CurrencyNameResolver.resolve(wallet.currency)}
            />
          ))}
        </Tabs>
      </CurrencyTabsCard>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  activeWalletId: state.wallet.activeId,
});
const mapDispatchToProps = {
  fetchWallet: walletActions.walletFetchRequested,
  setActiveWallet: walletActions.walletSetActive,
};

const componentWithStyles = withStyles(styles)(CurrencyTabs);

const reduxComponent: Object => * = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default reduxComponent(componentWithStyles);
