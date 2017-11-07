// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card component', () => {
  let component;

  const props = {
    showModal: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Card {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
