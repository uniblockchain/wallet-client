// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { shallow } from 'enzyme';
import { Verification } from './Verification';
import Done from './done';
import Intro from './intro/Intro';

describe('Verification process', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Verification />);
  });

  it('Should show verification process component', () => {
    expect(component);
  });

  it('Should show verification done', () => {
    component.setState({ verified: true });
    expect(component.find(Done)).toHaveLength(1);
    expect(component.find(Redirect)).toHaveLength(0);
  });

  it('Should show intro', () => {
    component.setState({ verified: false });
    expect(component.find(Done)).toHaveLength(0);
    expect(component.find(Redirect)).toHaveLength(1);
  });
});
