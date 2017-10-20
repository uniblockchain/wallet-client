// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Transaction } from './Transaction';
import FiatValue from './fiatValue';
import DateDisplay from './dateDisplay';

import type {
  Transaction as TransactionType,
  TransactionEntry,
} from '../../walletState';

describe('Transaction component', () => {
  let component;

  const sampleValue = 123;

  const currentWalletTransactionEntry: TransactionEntry = {
    currentWallet: true,
    address: 'an address',
    value: [
      {
        currency: 'EUR',
        value: sampleValue,
      },
    ],
  };

  const outsidePartyWalletTransactionEntry: TransactionEntry = {
    currentWallet: false,
    address: 'an other address',
    value: [
      {
        currency: 'EUR',
        value: 32343,
      },
    ],
  };

  const sampleTransaction: TransactionType = {
    id: 1,
    state: 'complete',
    date: new Date(),
    entries: [
      currentWalletTransactionEntry,
      outsidePartyWalletTransactionEntry,
    ],
  };

  const props = {
    transaction: sampleTransaction,
    classes: {},
  };

  beforeEach(() => {
    component = shallow(<Transaction {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders each transaction', () => {
    expect(component.contains(outsidePartyWalletTransactionEntry.address)).toBe(
      true,
    );
    expect(
      component.contains(<DateDisplay date={sampleTransaction.date} />),
    ).toBe(true);
    expect(component.contains(<FiatValue value={sampleValue} />)).toBe(true);
    expect(component.contains('complete')).toBe(true);
  });
});
