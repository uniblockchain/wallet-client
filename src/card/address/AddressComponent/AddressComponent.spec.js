// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { AddressComponent } from './AddressComponent';
import AddressSuggest from './AddressSuggest';
import AddressForm from './AddressForm';

describe('Address component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AddressComponent />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders address suggest', () => {
    expect(component.find(AddressSuggest)).toBePresent();
  });

  it('renders address form', () => {
    component.setState({ showFullForm: true });
    expect(component.find(AddressForm)).toBePresent();
  });
});
