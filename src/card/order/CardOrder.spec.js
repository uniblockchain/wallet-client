// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { CardOrder, type State } from './CardOrder';
import PlasticCard from '../PlasticCard';
import CardOrderSlider from './CardOrderSlider';
import { GradientButton } from '../../ui';

jest.mock('./cardOrderApi', () => ({
  hasOrder: jest.fn(() => Promise.resolve(true)),
  createOrder: jest.fn(() => Promise.resolve(true)),
}));

describe('CardOrder component', () => {
  let component;

  const state: State = {
    ordered: false,
  };

  beforeEach(() => {
    component = shallow(<CardOrder />);
    component.setState(state);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders plastic card', () => {
    expect(component.find(PlasticCard)).toBePresent();
  });

  it('renders slider', () => {
    expect(component.find(CardOrderSlider)).toBePresent();
  });

  it('renders join waiting list button when ordered state is false', () => {
    expect(component.find(GradientButton)).toBePresent();
  });

  it('does not render join waiting list button when ordered state is true', () => {
    component.setState({ ordered: true });
    expect(component.find(GradientButton)).not.toBePresent();
  });
});
