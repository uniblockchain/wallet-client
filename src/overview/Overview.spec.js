// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Overview } from './Overview';
import walletActions from '../wallet/walletActions';

describe('Overview component', () => {
  let component;

  const props = {
    fetchWallet: () => walletActions.walletFetchRequested(),
    wallets: [],
  };

  beforeEach(() => {
    component = shallow(<Overview {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
