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
  const address = 'some address';

  const sampleTransaction: TransactionType = {
    id: '1',
    status: 'COMPLETE',
    date: new Date(),
    currency: 'ETH',
    fee: [
      {
        currency: 'EUR',
        value: sampleValue,
      },
    ],
    value: [
      {
        currency: 'EUR',
        value: sampleValue,
      },
    ],
    address,
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

  it('renders the transaction', () => {
    expect(component.contains(address)).toBe(true);
    expect(
      component.contains(<DateDisplay date={sampleTransaction.date} />),
    ).toBe(true);
    expect(component.contains(<FiatValue value={sampleValue} />)).toBe(true);
    expect(component.contains(sampleTransaction.status)).toBe(true);
  });
});
