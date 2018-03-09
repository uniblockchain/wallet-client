// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddressRoutine } from './addressRoutine';
import { type Address } from './addressState';

type Props = {
  +address: Address,
  +fetchAddress: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withAddress = (WrappedComponent: *) => {
  class ComponentWithAddress extends Component<Props> {
    componentWillMount() {
      this.checkIfProfileIsLoaded(this.props.address);
    }

    checkIfProfileIsLoaded(address: Address) {
      const isAddressLoaded = address.id;
      if (!isAddressLoaded) {
        this.props.fetchAddress();
      }
    }

    render() {
      return <div>{<WrappedComponent {...this.props} />}</div>;
    }
  }

  const mapStateToProps = state => ({
    address: state.user.profile.address,
  });

  const mapDispatchToProps = {
    fetchAddress: fetchAddressRoutine,
  };

  const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(
    ComponentWithAddress,
  );
  connectedComponent.displayName = `withAddress(${getDisplayName(
    WrappedComponent,
  )})`;

  return connectedComponent;
};

export default withAddress;
