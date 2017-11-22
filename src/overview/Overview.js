// @flow

import React from 'react';
import type { Location } from 'react-router';
import styled from 'styled-components';

import { Card } from '../ui';
import Transactions from './transactions';
import withWallet from '../wallet/withWallet';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';
import { withUser } from '../user';

export type Props = {
  location: Location,
};

export const TransactionsCard = styled(Card)`
  padding: 1em 0 4em 0;
  .title {
    padding-left: 20px;
  }
`;

export const Overview = ({ location }: Props) => (
  <div>
    <Card>
      <BalanceDoughnut />
    </Card>
    <OverviewSlider isNewUser={location.state && location.state.isNewUser} />
    <TransactionsCard title="Activity">
      <Transactions />
    </TransactionsCard>
  </div>
);
export default withUser(withWallet(Overview));
