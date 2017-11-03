// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { LinearProgress } from 'material-ui';
import { Card } from '../ui';

import type { Wallet as WalletType } from '../wallet/walletState';
import Transactions from './transactions';
import withWallet from '../wallet/withWallet';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';

export type Props = {
  wallets: Array<WalletType>,
};

export const Overview = ({ wallets }: Props) => (
  <div>
    <Card>
      <BalanceDoughnut />
    </Card>
    {wallets.length === 0 ? <LinearProgress /> : ''}
    <OverviewSlider />
    <Card title="Activity">
      <Transactions />
    </Card>
  </div>
);

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

export default withWallet(connect(mapStateToProps)(Overview));
