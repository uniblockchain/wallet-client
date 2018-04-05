// @flow

import { shallow } from 'enzyme';
import React from 'react';
import { testWallet } from '../../../fixtures';
import { BalanceTable, type Props } from './BalanceTable';

describe('Balance table', () => {
  let component;

  const props: Props = {
    wallets: [testWallet],
    currency: 'EUR',
  };

  beforeEach(() => {
    component = shallow(<BalanceTable {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the wallet balance table row', () => {
    expect(component.contains(<td>Ether</td>)).toBe(true);
    expect(component.contains(<td>1.800000</td>)).toBe(true);
    expect(component.contains(<td>€455.88</td>)).toBe(true);
  });
});
