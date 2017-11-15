// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { TransactionDetails, Field, Label } from './TransactionDetails';
import type { Transaction as TransactionType } from '../../../../wallet/walletState';
import { Modal } from '../../../../ui';
import FiatValue from '../fiatValue';

describe('Transaction details component', () => {
  let component;

  const address = 'some address';
  const feeCrypto = 123;
  const feeFiat = 12333;
  const valueCrypto = 456;
  const valueFiat = 456000;

  const sampleTransaction: TransactionType = {
    id: 1,
    state: 'Completed',
    date: new Date(),
    currency: 'ETH',
    entries: [],
    fee: [
      {
        currency: 'ETH',
        value: feeCrypto,
      },
      {
        currency: 'EUR',
        value: feeFiat,
      },
    ],
    value: [
      {
        currency: 'ETH',
        value: valueCrypto,
      },
      {
        currency: 'EUR',
        value: valueFiat,
      },
    ],
    address,
  };

  const props = {
    transaction: sampleTransaction,
    onConfirm: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<TransactionDetails {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the component in a modal', () => {
    expect(component.find(Modal)).toHaveLength(1);
  });

  it('renders transaction value', () => {
    expect(component.contains(valueCrypto)).toBe(true);
    expect(component.contains(sampleTransaction.currency)).toBe(true);
  });

  it('renders transaction status', () => {
    expect(component).toContainReact(<Label>STATUS</Label>);
    expect(component).toContainReact(<Field>Completed</Field>);
  });

  it('renders transaction representation value', () => {
    expect(component).toContainReact(<Label>CURRENT VALUE</Label>);
    expect(component.contains(<FiatValue noColor value={valueFiat} />)).toBe(
      true,
    );
  });

  it('renders transaction time', () => {
    expect(component).toContainReact(<Label>TIME</Label>);
    expect(component).toContainReact(
      <Field>{sampleTransaction.date.toUTCString()}</Field>,
    );
  });

  it('renders transaction address', () => {
    expect(component).toContainReact(<Label>ADDRESS</Label>);
    expect(component).toContainReact(
      <Field>{sampleTransaction.address}</Field>,
    );
  });

  it('renders transaction time', () => {
    expect(component).toContainReact(<Label>FEE</Label>);
    expect(component).toContainReact(
      <Field>
        {feeCrypto}(<FiatValue inline value={feeFiat} />)
      </Field>,
    );
  });
});
