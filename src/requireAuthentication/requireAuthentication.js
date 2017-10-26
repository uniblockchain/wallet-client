// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

type Props = {
  +authenticated: boolean,
  +redirectToMainPage: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// higher order component which will redirect to login if tried to go to without auth.
const requireAuthentication = (WrappedComponent: *) => {
  class AuthenticatedComponent extends Component<Props> {
    componentWillMount() {
      this.checkAuthenticatedAndRedirect(this.props.authenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuthenticatedAndRedirect(nextProps.authenticated);
    }

    checkAuthenticatedAndRedirect(authenticated) {
      if (!authenticated) {
        this.props.redirectToMainPage();
      }
    }

    render() {
      return (
        <div>
          {this.props.authenticated ? <WrappedComponent {...this.props} /> : ''}
        </div>
      );
    }
  }

  AuthenticatedComponent.displayName = `requireAuthentication(${getDisplayName(
    WrappedComponent,
  )})`;

  const mapStateToProps = state => ({
    authenticated: !!state.login.token,
  });

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        redirectToMainPage: () => push('/'),
      },
      dispatch,
    );

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
};

export default requireAuthentication;
