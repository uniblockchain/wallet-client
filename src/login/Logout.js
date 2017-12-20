// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logoutRoutine } from './loginRoutines';
import { routes } from '../router';

type Props = {
  logout: () => void,
  redirectToMainPage: () => void,
};

export class Logout extends React.Component<Props> {
  componentWillMount() {
    this.props.logout();
    this.props.redirectToMainPage();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      redirectToMainPage: () => push(routes.BASE),
      logout: logoutRoutine.trigger,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(Logout);
