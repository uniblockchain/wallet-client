// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import { VERIFICATION_INTRO_ROUTE } from './constants';

export const Verification = () => <Redirect to={VERIFICATION_INTRO_ROUTE} />;

export default Verification;
