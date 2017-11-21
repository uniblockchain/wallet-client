// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from '../../wallet/walletState';
import { BalanceDoughnut } from './BalanceDoughnut';

describe('Balance Doughnut component', () => {
  let component;

  const props = {
    wallets: [],
  };

  const walletWithBalance = (value: number, currency: string): Wallet =>
    new Wallet({
      id: 1,
      address: '0xlolz0rz',
      currency: 'ETH',
      balance: [
        {
          value,
          currency,
        },
      ],
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
    const wallets: Array<Wallet> = [
      walletWithBalance(300, 'EUR'),
      walletWithBalance(200, 'EUR'),
    ];

    const balanceDoughnut: BalanceDoughnut = component.instance();

    expect(balanceDoughnut.getTotalBalance(wallets)).toEqual(300 + 200);
  });
});
