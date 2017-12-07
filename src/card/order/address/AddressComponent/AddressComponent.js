// @flow
import React from 'react';
import AddressSuggest from './AddressSuggest';
import AddressForm from './AddressForm';

type Props = {};

type State = {
  showFullForm: boolean,
};

export class AddressComponent extends React.Component<Props, State> {
  state = {
    showFullForm: false,
  };

  onAddressSuggestComplete() {
    this.setState({ showFullForm: true });
  }

  render() {
    const { showFullForm } = this.state;
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
}

export default AddressComponent;
