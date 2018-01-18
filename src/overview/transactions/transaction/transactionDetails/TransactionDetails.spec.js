// @flow
import React from 'react';
import { shallow } from 'enzyme';

import {
  TransactionDetails,
  Field,
  AddressField,
  Label,
  StatusField,
} from './TransactionDetails';
import type { Transaction as TransactionType } from '../../../../wallet/walletState';
import { Modal } from '../../../../ui';
import FiatValue from '../fiatValue';

describe('Transaction details component', () => {
  let component;

  const getTransaction = ({
    address,
    feeCrypto,
    feeFiat,
    valueCrypto,
    valueFiat,
    currency,
  }): TransactionType => {
    const transaction: TransactionType = {
      id: '1',
      status: 'COMPLETE',
      date: new Date(),
      currency,
      fee: [
        {
          currency,
          value: feeCrypto,
        },
        {
          currency: 'EUR',
          value: feeFiat,
        },
      ],
      value: [
        {
          currency,
          value: valueCrypto,
        },
        {
          currency: 'EUR',
          value: valueFiat,
        },
      ],
      address,
    };
    return transaction;
  };

  const transactionInput = {
    address: 'some address',
    feeCrypto: 123,
    feeFiat: 12333,
    valueCrypto: 556,
    valueFiat: 556000,
    currency: 'ETH',
  };

  let transaction = getTransaction(transactionInput);

  beforeEach(() => {
    const props = {
      transaction,
      onConfirm: jest.fn(),
    };
    component = shallow(<TransactionDetails {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the component in a modal', () => {
    expect(component.find(Modal)).toHaveLength(1);
  });

  it('renders transaction value', () => {
    expect(component.contains(transactionInput.valueCrypto.toFixed(6))).toBe(
      true,
    );
    expect(component.contains(transaction.currency)).toBe(true);
  });

  it('renders transaction status', () => {
    expect(component).toContainReact(<Label>STATUS</Label>);
    expect(component).toContainReact(
      <StatusField>{transaction.status}</StatusField>,
    );
  });

  it('renders transaction time', () => {
    expect(component).toContainReact(<Label>TIME</Label>);
    expect(component).toContainReact(
      <Field>{transaction.date.toUTCString()}</Field>,
    );
  });

  describe('money received view', () => {
    it('renders transaction address', () => {
      expect(component).toContainReact(<Label>SENDER ADDRESS</Label>);
      expect(component).toContainReact(
        <AddressField>{transaction.address}</AddressField>,
      );
    });
  });

  describe('money sent view', () => {
    const sentTransactionInput = {
      address: 'some address',
      feeCrypto: 123,
      feeFiat: 12333,
      valueCrypto: -456,
      valueFiat: -456000,
      currency: 'ETH',
    };

    beforeEach(() => {
      transaction = getTransaction(sentTransactionInput);
      component.setProps({ transaction });
    });

    it('renders transaction address', () => {
      transaction = getTransaction(sentTransactionInput);
      expect(component).toContainReact(<Label>RECIPIENT ADDRESS</Label>);
      expect(component).toContainReact(
        <AddressField>{sentTransactionInput.address}</AddressField>,
      );
    });

    it('renders transaction fee', () => {
      expect(component).toContainReact(<Label>FEE</Label>);
      expect(component).toContainReact(
        <Field>
          {sentTransactionInput.feeCrypto} (<FiatValue
            inline
            value={sentTransactionInput.feeFiat}
          />)
        </Field>,
      );
    });

    it('renders transaction amount with fee for ETH (fee not included in value)', () => {
      expect(component).toContainReact(<Label>AMOUNT WITH FEE</Label>);
      expect(component).toContainReact(
        <Field>
          {Math.abs(sentTransactionInput.valueCrypto) +
            sentTransactionInput.feeCrypto}{' '}
          (<FiatValue
            inline
            value={
              Math.abs(sentTransactionInput.valueFiat) +
              sentTransactionInput.feeFiat
            }
          />)
        </Field>,
      );
    });

    it('renders transaction amount with fee for non ETH (fee included in value)', () => {
      const ltcTransaction = getTransaction({
        ...sentTransactionInput,
        currency: 'LTC',
      });
      component.setProps({ transaction: ltcTransaction });
      expect(component).toContainReact(
        <Field>
          {Math.abs(sentTransactionInput.valueCrypto)} (<FiatValue
            inline
            value={Math.abs(sentTransactionInput.valueFiat)}
          />)
        </Field>,
      );
    });
  });
});
