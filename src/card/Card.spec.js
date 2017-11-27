// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Card />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
