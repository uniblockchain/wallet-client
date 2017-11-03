// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { OverviewSlider } from './OverviewSlider';

describe('Overview Slider component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OverviewSlider />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
