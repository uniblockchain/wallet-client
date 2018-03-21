// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { AddressComponent } from './AddressComponent';
import AddressSuggest from './AddressSuggest';
import AddressForm from './AddressForm';

describe('Address component', () => {
  let component;

  const savedAddress = {
    id: 1,
    countryCode: 'EE',
    city: 'Tallinn',
    streetAddress: 'Viru väljak 1-1',
    postalCode: '10000',
  };

  const initialAddress = {
    id: null,
    countryCode: null,
    city: null,
    streetAddress: null,
    apartment: null,
    postalCode: null,
  };

  const props = {
    address: initialAddress,
  };

  beforeEach(() => {
    component = shallow(<AddressComponent {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders address suggest', () => {
    expect(component.find(AddressSuggest)).toBePresent();
  });

  it('renders address form when suggest is done', () => {
    component.setState({ showFullForm: true });
    expect(component.find(AddressForm)).toBePresent();
  });

  it('renders address form when address is already present', () => {
    component.setProps({ address: savedAddress });
    expect(component.find(AddressForm)).toBePresent();
  });
});
