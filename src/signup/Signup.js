// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import type { MapStateToProps } from 'react-redux';
import {} from '../user';
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
      return (
        <Redirect
          to={{
            pathname: '/overview',
            state: { isNewUser: true },
          }}
        />
      );
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
