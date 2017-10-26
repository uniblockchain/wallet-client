// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import loginActions from './loginActions';
import type { LoginInitiated } from './loginActionTypes';

export type Props = {
  authenticated: boolean,
  login: (string, string) => LoginInitiated,
};

export const Login = (props: Props) => {
  const handleSubmit = values => {
    props.login(values.emailAddress, values.password);
  };
  if (props.authenticated) {
    return <Redirect to="/overview" />;
  }
  return <LoginForm onSubmit={handleSubmit} />;
};

const mapStateToProps = state => ({
  authenticated: !!state.login.token,
});

const mapDispatchToProps = {
  login: loginActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
