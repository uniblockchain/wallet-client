// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { LinearProgress } from 'material-ui';

import { Overview } from './Overview';
import Transactions from './transactions';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';
import type { Props } from './Overview';

describe('Overview component', () => {
  let component;

  const props: Props = {
    wallets: [],
  };

  beforeEach(() => {
    component = shallow(<Overview {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the balance doughnut', () => {
    expect(component.find(BalanceDoughnut).length).toEqual(1);
  });

  it('renders the overview slider', () => {
    expect(component.find(OverviewSlider).length).toEqual(1);
  });

  it('renders transactions', () => {
    expect(component.contains(<Transactions />)).toBe(true);
  });

  it('renders loader when wallets are not present', () => {
    component.setProps({ wallets: [] });
    expect(component.contains(<LinearProgress />)).toBe(true);
  });
});
