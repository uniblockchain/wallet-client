// @flow

import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
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

export const AddressComponent = class AddressComponent extends React.Component<
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
