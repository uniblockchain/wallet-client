// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from './userActions';
import type { UserFetchRequest } from './userActionTypes';

type Props = {
  userId: number,
  userEmail: string,
  fetchUser: () => UserFetchRequest,
};

export class User extends Component<Props> {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { userId, userEmail } = this.props;

    return (
      <div>
        userId: {userId}, userEmail: {userEmail}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  userEmail: state.user.email,
});

const mapDispatchToProps = {
  fetchUser: userActions.userFetchRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
