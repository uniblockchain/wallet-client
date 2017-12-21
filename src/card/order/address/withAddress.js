// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddressRoutine } from './addressRoutine';
import { type Address } from './addressState';

type Props = {
  +address: Address,
  +fetchAddress: () => void,
};

const withAddress = (WrappedComponent: *) => {
  class ComponentWithProfile extends Component<Props> {
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

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithProfile);
};

export default withAddress;
