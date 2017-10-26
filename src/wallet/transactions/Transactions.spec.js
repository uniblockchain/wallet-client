// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Transactions } from './Transactions';
import Transaction from './transaction';
import type { Wallet } from '../walletState';

describe('Transactions component', () => {
  let component;

  const sampleWallet: Wallet = {
    id: 1,
    address: 'sampleAddress',
    currency: 'EUR',
    balance: [],
    receiveAddress: 'sampleReceiveAddress',
    transactions: [
      {
        id: 1,
        state: 'complete',
        date: new Date(),
        entries: [],
      },
      {
        id: 2,
        state: 'complete',
        date: new Date(),
        entries: [],
      },
    ],
  };

  const props = {
    wallets: [sampleWallet],
    classes: {},
  };

  beforeEach(() => {
    component = shallow(<Transactions {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders each transaction', () => {
    expect(
      component.contains(
        <Transaction transaction={sampleWallet.transactions[0]} />,
      ),
    ).toBe(true);
    expect(
      component.contains(
        <Transaction transaction={sampleWallet.transactions[1]} />,
      ),
    ).toBe(true);
  });
});
