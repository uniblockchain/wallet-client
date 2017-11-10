// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Send } from './Send';
import sendActions from './sendActions';
import SendForm from './SendForm';
import CurrencyTabs from '../currencyTabs';
import { Modal, Progress } from '../../ui';

describe('Send component', () => {
  let component;

  const props = {
    walletId: 1,
    sendTransaction: sendActions.sendTransactionRequested,
    error: null,
    isLoading: false,
    transactionStatus: null,
    clearResponse: jest.fn(),
    clearError: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Send {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('Displays currency tabs', () => {
    expect(component.contains(<CurrencyTabs />)).toBe(true);
  });

  it('Displays send form', () => {
    expect(component.find(SendForm).length).toBe(1);
  });

  it('Displays errors when they are present', () => {
    const error = 'some error';
    expect(component.find(Modal).length).toBe(0);
    component.setProps({ error });
    expect(component.find(Modal).length).toBe(1);
    expect(component.find(Modal).prop('description')).toEqual(error);
  });

  it('Hides error modal on confirming modal', () => {
    const error = 'some error';
    component.setProps({ error });
    expect(component.find(Modal).prop('onConfirm')).toEqual(props.clearError);
  });

  it('Displays loading modal when loading', () => {
    const loadingModal = (
      <Modal title="Sending!" description="Sending transfer..." type={null}>
        <Progress />
      </Modal>
    );
    expect(component.contains(loadingModal)).toBe(false);
    component.setProps({ isLoading: true });
    expect(component.contains(loadingModal)).toBe(true);
  });

  it('Displays transaction status modal when signed status is present', () => {
    const transactionStatus = 'signed';
    expect(component.find(Modal).length).toBe(0);
    component.setProps({ transactionStatus });
    expect(component.find(Modal).length).toBe(1);
  });

  it('Errors on unknown transaction status', () => {
    const transactionStatus = 'unknown status';
    expect(() => {
      component.setProps({ transactionStatus });
    }).toThrowError();
  });

  it('Clears transaction status when confirming modal', () => {
    const transactionStatus = 'signed';
    component.setProps({ transactionStatus });
    expect(component.find(Modal).prop('onConfirm')).toEqual(
      props.clearResponse,
    );
  });
});
