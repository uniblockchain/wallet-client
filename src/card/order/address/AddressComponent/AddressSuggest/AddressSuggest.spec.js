// @flow
import React from 'react';
import { shallow } from 'enzyme';
import config from 'react-global-configuration';
import { AddressSuggest } from './AddressSuggest';

describe('Address suggest component', () => {
  let component;
  const props = {
    setField: jest.fn(),
    onSuggest: jest.fn(),
  };

  config.set({
    googleMapsKey: 'a key',
  });

  beforeEach(() => {
    component = shallow(<AddressSuggest {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders a google maps loader', () => {
    expect(component.find('GoogleMapsLoader')).toBePresent();
  });
});
