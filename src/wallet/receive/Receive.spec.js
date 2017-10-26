// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Receive } from './Receive';
import CurrencyTabs from './currencyTabs';
import Top from './Top';
import AddressBlock from './addressBlock';

describe('Receive component', () => {
  let component;

  const props = {
    classes: {},
    fetchWallet: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Receive {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders Top', () => {
    expect(component.contains(<Top />)).toBe(true);
  });

  it('renders Address blocks', () => {
    expect(component.contains(<AddressBlock />)).toBe(true);
  });

  it('renders currency tabs', () => {
    expect(component.contains(<CurrencyTabs />)).toBe(true);
  });
});
