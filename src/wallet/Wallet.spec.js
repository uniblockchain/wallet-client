// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';
import walletActions from './walletActions';

describe('Wallet component', () => {
  let component;

  const props = {
    fetchWallet: () => walletActions.walletFetchRequested(),
    wallets: [],
  };

  beforeEach(() => {
    component = shallow(<Wallet {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
