// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import { WrappedContent } from '../ui';
import { VERIFICATION_INTRO_ROUTE } from './constants';
import Done from './done';

export type Props = {};

type State = {
  verified: ?boolean,
};

export class Verification extends React.Component<any, State> {
  state = {
    verified: false,
  };

  render() {
    if (this.state.verified === undefined) {
      return null;
    }
    return this.state.verified ? (
      <WrappedContent>
        <Done />
      </WrappedContent>
    ) : (
      <Redirect to={VERIFICATION_INTRO_ROUTE} />
    );
  }
}
export default Verification;
