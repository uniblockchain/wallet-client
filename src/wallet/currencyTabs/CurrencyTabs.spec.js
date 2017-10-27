// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { CurrencyTabs } from './CurrencyTabs';
import type { Wallet } from '../walletState';
import { Tabs, Tab } from 'material-ui';

describe('CurrencyTabs component', () => {
  let component;

  const sampleWallet: Wallet = {
    id: 1,
    address: 'sampleAddress',
    currency: 'ETH',
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
    wallets: [sampleWallet],
    classes: {},
    setActiveWallet: jest.fn(),
    activeWalletId: 0,
    fetchWallet: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<CurrencyTabs {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders tabs', () => {
    expect(component.find(Tabs).length).toBe(1);
  });

  it('renders individual tab', () => {
    expect(component.find(Tab).length).toBe(1);
  });
});
