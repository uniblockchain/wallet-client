// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { EmailPage } from './EmailPage';

describe('EmailPage component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EmailPage />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
