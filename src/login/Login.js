// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import LoginForm from './LoginForm';
import AppRouter from '../router';

export type Props = {
  authenticated: boolean,
};

export const Login = (props: Props) => {
  if (props.authenticated) {
    return <AppRouter overview />;
  }
  return <LoginForm />;
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(Login);
