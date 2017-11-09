// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Transaction } from './Transaction';
import FiatValue from './fiatValue';
import DateDisplay from './dateDisplay';

import type {
  Transaction as TransactionType,
  TransactionEntry,
} from '../../../wallet/walletState';

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

  const currentWalletTransactionEntry2: TransactionEntry = {
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
    state: 'Completed',
    date: new Date(),
    entries: [
      currentWalletTransactionEntry,
      currentWalletTransactionEntry2,
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

  it('renders the transaction, summarizing current wallet entries', () => {
    expect(component.contains(outsidePartyWalletTransactionEntry.address)).toBe(
      true,
    );
    expect(
      component.contains(<DateDisplay date={sampleTransaction.date} />),
    ).toBe(true);
    expect(
      component.contains(<FiatValue value={sampleValue + sampleValue} />),
    ).toBe(true);
    expect(component.contains('Completed')).toBe(true);
  });
});
