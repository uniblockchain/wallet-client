// @flow

import React from 'react';

import { Card } from '../ui';
import withWallet from '../wallet/withWallet';
import BalanceTable from './balance/table';
import { TotalBalance } from './balance';
import { withUser } from '../user';
import VerificationButton from './verificationButton';

const TotalBalanceCard = Card.extend`
  margin-top: 46px;
`;

export const Overview = () => (
  <div>
    <TotalBalanceCard>
      <TotalBalance />
    </TotalBalanceCard>
    <VerificationButton />
    <Card>
      <BalanceTable />
    </Card>
  </div>
);

export default withUser(withWallet(Overview));
