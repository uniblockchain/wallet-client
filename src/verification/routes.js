// @flow

import React from 'react';
import { Route } from 'react-router';
import appWrapper from '../appWrapper';
import Intro from './intro';
import verificationFlow from './VerificationFlow';
import requireAuthentication from '../requireAuthentication';
import {
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_CONFIRM_ROUTE,
  VERIFICATION_SELFIE_VERIFICATION_ROUTE,
} from './constants';
import Profile from './profile';
import AddressComponent from './address/AddressComponent';
import {
  IdVerification,
  AddressVerification,
  SelfieVerification,
} from './verificationFiles';
import Confirm from './confirm';

const introRoute = (
  <Route
    key={1}
    exact
    path={VERIFICATION_INTRO_ROUTE}
    component={appWrapper(requireAuthentication(verificationFlow(Intro)))}
  />
);

const profileRoute = (
  <Route
    key={1}
    exact
    path={VERIFICATION_PROFILE_ROUTE}
    component={appWrapper(requireAuthentication(verificationFlow(Profile)))}
  />
);

const addressRoute = (
  <Route
    key={2}
    path={VERIFICATION_ADDRESS_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(AddressComponent)),
    )}
  />
);

const idVerificationRoute = (
  <Route
    key={2}
    path={VERIFICATION_ID_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(IdVerification)),
    )}
  />
);

const addressVerificationRoute = (
  <Route
    key={3}
    path={VERIFICATION_ADDRESS_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(AddressVerification)),
    )}
  />
);

const selfieVerificationRoute = (
  <Route
    key={4}
    path={VERIFICATION_SELFIE_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(SelfieVerification)),
    )}
  />
);

const confirmRoute = (
  <Route
    key={5}
    path={VERIFICATION_CONFIRM_ROUTE}
    component={appWrapper(requireAuthentication(verificationFlow(Confirm)))}
  />
);

export default [
  introRoute,
  profileRoute,
  addressRoute,
  idVerificationRoute,
  addressVerificationRoute,
  selfieVerificationRoute,
  confirmRoute,
];
