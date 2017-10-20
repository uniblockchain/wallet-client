// @flow
import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import loginActions from './loginActions';
import './LoginForm.css';
import type { LoginInitiated } from './loginActionTypes';

type Props = {
  login: (string, string) => LoginInitiated,
};

export const Login = (props: Props) => {
  const handleSubmit = values => {
    props.login(values.emailAddress, values.password);
  };
  return <LoginForm onSubmit={handleSubmit} />;
};

const mapDispatchToProps = {
  login: loginActions.login,
};

export default connect(null, mapDispatchToProps)(Login);
