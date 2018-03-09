// @flow

import React from 'react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import ReactGooglePlacesSuggest from 'react-google-places-suggest';
import { connect } from 'react-redux';
import config from 'react-global-configuration';
import { FormInput, Label, FormGroup } from '../../../../ui/form';
import { fetchAddressRoutine } from '../../addressRoutine';
import type { Address } from '../../addressState';

type Props = {
  setAddress: (address: Address) => void,
  onSuggest: () => void,
};

type State = {
  search: string,
  value: string,
};

const getSuggestFields = suggest => {
  const componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'short_name',
    postal_code: 'short_name',
  };

  const suggestFields = {};
  suggest.address_components.forEach(component => {
    const addressType = component.types[0];
    if (componentForm[addressType]) {
      suggestFields[addressType] = component[componentForm[addressType]];
    }
  });

  return suggestFields;
};

export class AddressSuggest extends React.Component<Props, State> {
  state = {
    search: '',
    value: '',
  };

  handleInputChange(e: Event) {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      this.setState({ search: target.value, value: target.value });
    }
  }

  fillAddressForm(suggestFields: any) {
    let streetAddress = null;
    let countryCode = null;
    let city = null;
    let postalCode = null;

    if (suggestFields.route) {
      if (suggestFields.street_number) {
        streetAddress = `${suggestFields.route} ${suggestFields.street_number}`;
      } else {
        streetAddress = `${suggestFields.route}`;
      }
    }

    if (suggestFields.country) {
      countryCode = suggestFields.country;
    }

    if (suggestFields.locality) {
      city = suggestFields.locality;
    }

    if (suggestFields.postal_code) {
      postalCode = suggestFields.postal_code;
    }

    this.props.setAddress({
      id: null,
      streetAddress,
      city,
      postalCode,
      countryCode,
    });
  }

  handleSelectSuggest(suggest: any) {
    const suggestFields = getSuggestFields(suggest);
    this.fillAddressForm(suggestFields);
    this.setState({ search: '', value: suggest.formatted_address });
    this.props.onSuggest();
  }

  render() {
    const { search, value } = this.state;
    return (
      <div>
        <ReactGoogleMapLoader
          params={{
            key: config.get('googleMapsKey'),
            libraries: 'places,geocode',
          }}
          render={googleMaps =>
            googleMaps && (
              <div>
                <ReactGooglePlacesSuggest
                  autocompletionRequest={{ input: search }}
                  googleMaps={googleMaps}
                  onSelectSuggest={suggest => this.handleSelectSuggest(suggest)}
                >
                  <FormGroup>
                    <Label htmlFor="addressInput">Address</Label>
                    <FormInput
                      id="addressInput"
                      type="text"
                      value={value}
                      placeholder="Search a location"
                      onChange={val => this.handleInputChange(val)}
                    />
                  </FormGroup>
                </ReactGooglePlacesSuggest>
              </div>
            )
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setAddress: fetchAddressRoutine.success,
};

export default connect(undefined, mapDispatchToProps)(AddressSuggest);
