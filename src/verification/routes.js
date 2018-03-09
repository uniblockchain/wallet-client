// @flow

import React from 'react';
import { Route } from 'react-router';
import Intro from './intro';
import verificationFlow from './VerificationFlow';
import requireAuthentication from '../requireAuthentication';
import { authenticatedPage } from '../page';
import {
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_CONFIRM_ROUTE,
  VERIFICATION_DONE_ROUTE,
} from './constants';
import Profile from './profile';
import AddressComponent from './address/AddressComponent';
import { IdVerification, AddressVerification } from './verificationFiles';
import Done from './done';
import Confirm from './confirm';

const introRoute = (
  <Route
    key={1}
    exact
    path={VERIFICATION_INTRO_ROUTE}
    component={requireAuthentication(verificationFlow(Intro))}
  />
);

const profileRoute = (
  <Route
    key={1}
    exact
    path={VERIFICATION_PROFILE_ROUTE}
    component={requireAuthentication(verificationFlow(Profile))}
  />
);

const addressRoute = (
  <Route
    key={2}
    path={VERIFICATION_ADDRESS_ROUTE}
    component={requireAuthentication(verificationFlow(AddressComponent))}
  />
);

const idVerificationRoute = (
  <Route
    key={2}
    path={VERIFICATION_ID_VERIFICATION_ROUTE}
    component={requireAuthentication(verificationFlow(IdVerification))}
  />
);

const addressVerificationRoute = (
  <Route
    key={3}
    path={VERIFICATION_ADDRESS_VERIFICATION_ROUTE}
    component={requireAuthentication(verificationFlow(AddressVerification))}
  />
);

const confirmRoute = (
  <Route
    key={4}
    path={VERIFICATION_CONFIRM_ROUTE}
    component={requireAuthentication(verificationFlow(Confirm))}
  />
);

const doneRoute = (
  <Route
    key={5}
    path={VERIFICATION_DONE_ROUTE}
    component={authenticatedPage(verificationFlow(Done))}
  />
);

export default [
  introRoute,
  profileRoute,
  addressRoute,
  idVerificationRoute,
  addressVerificationRoute,
  confirmRoute,
  doneRoute,
];
