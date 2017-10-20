// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Transactions } from './Transactions';
import Transaction from './transaction';

describe('Transactions component', () => {
  let component;

  const sampleWallet = {
    transactions: [
      { sampleTransactionOne: 'true' },
      { sampleTransactionTwo: 'true' },
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
