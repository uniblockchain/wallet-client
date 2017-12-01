// @flow

import React from 'react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import ReactGooglePlacesSuggest from 'react-google-places-suggest';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import config from 'react-global-configuration';
import { FormInput, Label, FormGroup } from '../../../../ui/form';
import { WrappedContent } from '../../../../ui';

const StyledContent = styled(WrappedContent)`
  background-color: #e5f9f3;
`;

type Props = {
  setField: (string, string, string) => void,
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
    country: 'long_name',
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
    if (suggestFields.route) {
      if (suggestFields.street_number) {
        this.props.setField(
          'cardAddress',
          'streetAddress',
          `${suggestFields.route} ${suggestFields.street_number}`,
        );
      } else {
        this.props.setField(
          'cardAddress',
          'streetAddress',
          `${suggestFields.route}`,
        );
      }
    }

    if (suggestFields.country) {
      this.props.setField('cardAddress', 'country', suggestFields.country);
    }

    if (suggestFields.locality) {
      this.props.setField('cardAddress', 'city', suggestFields.locality);
    }

    if (suggestFields.postal_code) {
      this.props.setField(
        'cardAddress',
        'postalCode',
        suggestFields.postal_code,
      );
    }
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
      <StyledContent>
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
            )}
        />
      </StyledContent>
    );
  }
}

const mapDispatchToProps = {
  setField: change,
};

export default connect(undefined, mapDispatchToProps)(AddressSuggest);
