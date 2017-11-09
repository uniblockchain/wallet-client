// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Wallet as WalletComponent } from './Wallet';
import type { WalletType } from './walletState';
import { Wallet } from './walletState';

describe('Wallet component', () => {
  let component;

  const wallet: WalletType = {
    id: 1,
    currency: 'BTC',
    address: '',
    transactions: [],
    receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
    balance: [
      {
        value: 0.19890018,
        currency: 'BTC',
      },
      {
        value: 1257.71,
        currency: 'EUR',
      },
    ],
  };

  const props = {
    wallet: new Wallet(wallet),
    representationalCurrency: 'EUR',
  };

  beforeEach(() => {
    component = shallow(<WalletComponent {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
