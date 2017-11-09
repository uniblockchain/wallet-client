// @flow

import React from 'react';
import type { Location } from 'react-router';
import { Card, Divider } from '../ui';

import Transactions from './transactions';
import withWallet from '../wallet/withWallet';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';

export type Props = {
  location: Location,
};

export const Overview = ({ location }: Props) => (
  <div>
    <Card>
      <BalanceDoughnut />
    </Card>
    {location.state && location.state.slideOpen ? (
      <OverviewSlider />
    ) : (
      <Divider />
    )}
    <Card title="Activity">
      <Transactions />
    </Card>
  </div>
);
export default withWallet(Overview);
