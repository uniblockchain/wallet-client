// @flow

import React from 'react';
import { shallow } from 'enzyme';

// import { Transactions } from './Transactions';
// import Transaction from './transaction';
import { AddressBlock } from './AddressBlock';
import type { Wallet } from '../../walletState';
import { Button, LinearProgress } from 'material-ui';

describe('Address block', () => {
  let component;

  const sampleWallet: Wallet = {
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
    classes: {},
    wallets: [sampleWallet],
    activeWalletId: 1,
  };

  beforeEach(() => {
    component = shallow(<AddressBlock {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders deposit hero', () => {
    expect(component.contains(<div>DEPOSIT BITCOIN</div>)).toBe(true);
  });

  it('renders deposit address intro', () => {
    expect(component.contains(<div>YOUR BITCOIN ADDRESS</div>)).toBe(true);
  });

  it('renders copying button', () => {
    expect(
      // $FlowFixMe
      component.contains(<Button raised>TAP TO COPY</Button>),
    ).toBe(true);
  });

  it('renders loading when active wallet not present', () => {
    component.setProps({ wallets: [] });
    // $FlowFixMe
    expect(component.contains(<LinearProgress />)).toBe(true);
  });
});
