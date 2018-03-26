// @flow

import React, { Component } from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { Heading } from '../../../ui';
import variables from '../../../ui/variables';
import AddressSuggest from './AddressSuggest';
import AddressForm from './AddressForm';
import withAddress from '../withAddress';
import { type Address } from '../addressState';

type Props = {
  address: Address,
};

type State = {
  showFullForm: boolean,
};

const StyledHeading = styled(Heading)`
  color: ${variables.colorNeutralDarkest};
`;

export const AddressComponent = class AddressComponent extends Component<
  Props,
  State,
> {
  state = {
    showFullForm: false,
  };

  onAddressSuggestComplete() {
    this.setState({ showFullForm: true });
  }

  render() {
    let { showFullForm } = this.state;
    if (this.props.address.id) {
      showFullForm = true;
    }

    return (
      <div>
        <StyledHeading>Address</StyledHeading>
        {showFullForm ? (
          <AddressForm />
        ) : (
          <AddressSuggest onSuggest={() => this.onAddressSuggestComplete()} />
        )}
      </div>
    );
  }
};

AddressComponent.displayName = 'AddressComponent';

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  address: state.user.profile.address,
});

const ConnectedAddressComponent = connect(mapStateToProps, null)(
  AddressComponent,
);

ConnectedAddressComponent.displayName = 'AddressComponent';

export default withAddress(ConnectedAddressComponent);
