// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logoutRoutine } from './loginRoutines';

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
      redirectToMainPage: () => push('/'),
      logout: logoutRoutine.trigger,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(Logout);
