// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loginActions from './loginActions';

type Props = {
  logout: () => void,
};

export const Logout = (props: Props) => {
  props.logout();
  return <Redirect to="/" />;
};

const mapDispatchToProps = {
  logout: loginActions.logout,
};

export default connect(null, mapDispatchToProps)(Logout);
