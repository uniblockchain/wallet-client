// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';
import walletActions from './walletActions';

describe('Wallet component', () => {
  let component;

  const props = {
    id: 1,
    address: '59dcc2c2e2d55fcb075e09e8dc5d2723',
    coin: 'ETH',
    fetchWallet: () => walletActions.walletFetchRequested(),
  };

  beforeEach(() => {
    component = shallow(<Wallet {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
