// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { DateDisplay } from './DateDisplay';

describe('Date display component', () => {
  let component;

  const date: date = new Date('December 25, 1995 23:15:30');

  const props = {
    date,
  };

  beforeEach(() => {
    component = shallow(<DateDisplay {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders date', () => {
    expect(component.contains('December')).toBe(true);
    expect(component.contains(25)).toBe(true);
    expect(component.contains(1995)).toBe(true);
  });
});
