// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from 'material-ui';

import { Overview } from './Overview';
import walletActions from '../wallet/walletActions';
import { Slider } from '../ui/slider';
import Transactions from './transactions';

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

  it('renders slider', () => {
    expect(component.find(Slider).length).toEqual(1);
  });

  it('renders transactions', () => {
    expect(component.contains(<Transactions />)).toBe(true);
  });

  it('renders loader when wallets are not present', () => {
    component.setProps({ wallets: [] });
    expect(component.contains(<LinearProgress />)).toBe(true);
  });
});
