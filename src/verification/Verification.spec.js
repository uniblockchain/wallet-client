// @flow
import { shallow } from 'enzyme';
import React from 'react';
import { Redirect } from 'react-router';
import { Verification } from './Verification';

describe('Verification process', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Verification />);
  });

  it('Should redirect to the verification intro', () => {
    expect(component);
    expect(component.find(Redirect)).toHaveLength(1);
  });
});
