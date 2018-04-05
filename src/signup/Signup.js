// @flow

import React, { Component } from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import AppRouter from '../router';
import EmailPage from './EmailPage';
import PasswordPage from './PasswordPage';

export type Props = {
  authenticated: boolean,
};

type State = {
  page: number,
};

export class Signup extends Component<Props, State> {
  state = {
    page: 1,
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const { authenticated } = this.props;
    const { page } = this.state;
    if (authenticated) {
      return <AppRouter defaultOnEnter />;
    }
    return (
      <div>
        {page === 1 && <EmailPage onSubmit={this.nextPage} />}
        {page === 2 && <PasswordPage previousPage={this.previousPage} />}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(Signup);
