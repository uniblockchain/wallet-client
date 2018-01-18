// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from '../../wallet/walletState';
import { BalanceDoughnut } from './BalanceDoughnut';
import { testWallet } from '../../fixtures';

describe('Balance Doughnut component', () => {
  let component;

  const props = {
    wallets: [],
    currency: 'ETH',
  };

  const walletWithoutBalance = new Wallet({
    id: 1,
    address: '0xlolz0rz',
    currency: 'ETH',
    transactions: [],
    receiveAddress: '0xlolw0t',
  });

  beforeEach(() => {
    component = shallow(<BalanceDoughnut {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('calculates the total balance in fiat currency', () => {
    const wallets: Array<Wallet> = [testWallet, walletWithoutBalance];

    const balanceDoughnut: BalanceDoughnut = component.instance();

    expect(balanceDoughnut.getTotalBalance(wallets, 'ETH')).toEqual(1.8);
  });
});
