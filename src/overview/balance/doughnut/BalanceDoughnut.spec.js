// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { testWallet } from '../../../fixtures';
import type { WalletType } from '../../../wallet/walletState';
import { BalanceDoughnut } from './BalanceDoughnut';

describe('Balance Doughnut component', () => {
  let component;

  const props = {
    wallets: [],
    currency: 'EUR',
  };

  const walletWithoutBalance = {
    id: 1,
    address: '0xlolz0rz',
    currency: 'ETH',
    transactions: [],
    receiveAddress: '0xlolw0t',
  };

  beforeEach(() => {
    component = shallow(<BalanceDoughnut {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('calculates the total balance in fiat currency', () => {
    const wallets: Array<WalletType> = [testWallet, walletWithoutBalance];

    const balanceDoughnut: BalanceDoughnut = component.instance();

    expect(balanceDoughnut.getTotalBalance(wallets, 'ETH')).toEqual(
      testWallet.getBalance(),
    );
  });
});
