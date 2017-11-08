// @flow

import React from 'react';
import { Card } from '../ui';

import Transactions from './transactions';
import withWallet from '../wallet/withWallet';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';

export const Overview = () => (
  <div>
    <Card>
      <BalanceDoughnut />
    </Card>
    <OverviewSlider />
    <Card title="Activity">
      <Transactions />
    </Card>
  </div>
);
export default withWallet(Overview);
