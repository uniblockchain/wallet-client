// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Overview } from './Overview';

describe('Overview component', () => {
  let component;

  const props = {};

  beforeEach(() => {
    component = shallow(<Overview {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
