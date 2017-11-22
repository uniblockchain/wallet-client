// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { UserState } from '../userState';
import { fetchRoutine } from '../userRoutines';

type Props = {
  +user: UserState,
  +fetchUser: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withUser = (WrappedComponent: *) => {
  class ComponentWithUser extends Component<Props> {
    componentWillMount() {
      this.checkIfUserIsLoaded(this.props.user);
    }

    checkIfUserIsLoaded(user: UserState) {
      const isUserLoaded = user.id;
      if (!isUserLoaded) {
        this.props.fetchUser();
      }
    }

    render() {
      return <div>{<WrappedComponent {...this.props} />}</div>;
    }
  }

  ComponentWithUser.displayName = `withUser(${getDisplayName(
    WrappedComponent,
  )})`;

  const mapStateToProps = state => ({
    user: state.user,
  });

  const mapDispatchToProps = {
    fetchUser: fetchRoutine,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWithUser);
};

export default withUser;
