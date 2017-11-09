// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from 'material-ui';
import { AddressBlock } from './AddressBlock';
import type { WalletType } from '../../walletState';
import { Wallet } from '../../walletState';

describe('Address block', () => {
  let component;

  const sampleWallet: WalletType = {
    id: 1,
    address: 'sampleAddress',
    currency: 'BTC',
    balance: [],
    receiveAddress: 'sampleReceiveAddress',
    transactions: [
      {
        id: 1,
        state: 'complete',
        date: new Date(),
        entries: [],
      },
    ],
  };

  const props = {
    wallet: new Wallet(sampleWallet),
    onCopy: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<AddressBlock {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders deposit hero', () => {
    expect(component).toContainReact(<h1>Receive Bitcoin</h1>);
  });

  it('renders deposit address intro', () => {
    const header = component.find('AddressHeader');
    expect(header.render().text()).toBe('Your Bitcoin address');
  });

  it('renders copying button', () => {
    expect(props.onCopy).not.toHaveBeenCalled();
    component.find('CopyButton').simulate('click');
    expect(props.onCopy).toHaveBeenCalledTimes(1);
  });

  it('renders loading when active wallet not present', () => {
    component.setProps({ wallet: null });
    expect(component.contains(<LinearProgress />)).toBe(true);
  });
});
