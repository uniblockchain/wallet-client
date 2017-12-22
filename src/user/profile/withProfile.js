// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { ProfileState } from './profileState';
import { fetchRoutine } from './profileRoutines';

type Props = {
  +profile: ProfileState,
  +fetchProfile: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withProfile = (WrappedComponent: *) => {
  class ComponentWithProfile extends Component<Props> {
    componentWillMount() {
      this.checkIfProfileIsLoaded(this.props.profile);
    }

    checkIfProfileIsLoaded(profile: ProfileState) {
      const isProfileLoaded = profile.id;
      if (!isProfileLoaded) {
        this.props.fetchProfile();
      }
    }

    render() {
      return <div>{<WrappedComponent {...this.props} />}</div>;
    }
  }

  ComponentWithProfile.displayName = `withProfile(${getDisplayName(
    WrappedComponent,
  )})`;

  const mapStateToProps = state => ({
    profile: state.user.profile,
  });

  const mapDispatchToProps = {
    fetchProfile: fetchRoutine,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithProfile);
};

export default withProfile;
