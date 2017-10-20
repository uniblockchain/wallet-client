// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { FiatValue } from './FiatValue';

describe('Fiat value component', () => {
  let component;

  const value: number = 123.33233223;
  const currency: string = 'USD';

  const props = {
    value,
    currency,
  };

  beforeEach(() => {
    component = shallow(<FiatValue {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders fiat value', () => {
    expect(component.contains('$')).toBe(true);
    expect(component.contains(123.33)).toBe(true);
  });
});
