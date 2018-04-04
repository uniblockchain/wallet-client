// @flow

import React from 'react';
import type { Location } from 'react-router';
import styled from 'styled-components';

import { Card } from '../ui';
import withWallet from '../wallet/withWallet';
import BalanceDoughnut from './balance/doughnut';
import BalanceTable from './balance/table';
import OverviewSlider from './slider';
import TransactionList from './transactions';
import { withUser } from '../user';
import VerificationButton from './verificationButton';
import MarketRateTable from './marketRates';

export type Props = {
  location: Location,
};

const TransactionsCard = styled(Card)`
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
    <Card>
      <BalanceTable />
    </Card>
    <OverviewSlider isNewUser={location.state && location.state.isNewUser} />
    <VerificationButton />
    <TransactionsCard title="Activity">
      <TransactionList />
    </TransactionsCard>
  </div>
);

export default withUser(withWallet(Overview));
