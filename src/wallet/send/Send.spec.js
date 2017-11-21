// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Send } from './Send';
import SendForm from './SendForm';
import CurrencyTabs from '../currencyTabs';
import AppRouter from '../../router';
import { Modal, Progress } from '../../ui';
import { testWallet } from '../../fixtures';

describe('Send component', () => {
  let component;

  const props = {
    activeWallet: testWallet,
    isLoading: false,
    transactionStatus: null,
    clear: jest.fn(),
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

  it('On confirm modal clears transaction status', () => {
    const transactionStatus = 'signed';
    component.setProps({ transactionStatus });
    component.find(Modal).prop('onConfirm')();
    expect(props.clear.mock.calls.length).toBe(1);
  });

  it('On confirm modal redirects back to wallet', () => {
    const transactionStatus = 'signed';
    component.setProps({ transactionStatus });
    component.find(Modal).prop('onConfirm')();
    expect(component.contains(<AppRouter wallet />));
  });
});
