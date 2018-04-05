// @flow

import React from 'react';
import { Card } from '../ui';
import withWallet from '../wallet/withWallet';
import withUser from '../user/withUser';
import BalanceDoughnut from './balance/doughnut';
import BalanceTable from './balance/table';
import VerificationButton from './verificationButton';

export const Overview = () => (
  <div>
    <Card>
      <BalanceDoughnut />
    </Card>
    <Card>
      <BalanceTable />
    </Card>
    <VerificationButton />
  </div>
);

export default withUser(withWallet(Overview));
