// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { CurrencyTabs } from './CurrencyTabs';
import { Tabs, Tab } from '../../ui';
import { testWallet } from '../../fixtures';

describe('CurrencyTabs component', () => {
  let component;

  const props = {
    wallets: [testWallet],
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
