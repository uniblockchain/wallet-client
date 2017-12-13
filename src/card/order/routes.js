// @flow

import React from 'react';
import { Route } from 'react-router';
import AddressComponent from './address/AddressComponent';
import Intro from './intro';
import Profile from './profile';
import { IdVerification, AddressVerification } from './verification';
import Done from './done';
import cardOrderFlow from './cardOrderFlow';
import requireAuthentication from '../../requireAuthentication';
import { authenticatedPage } from '../../page';
import {
  CARD_ORDER_INTRO_ROUTE,
  CARD_ORDER_PROFILE_ROUTE,
  CARD_ORDER_ADDRES_ROUTE,
  CARD_ORDER_ID_VERIFICATION_ROUTE,
  CARD_ORDER_ADDRES_VERIFICATION_ROUTE,
  CARD_ORDER_DONE_ROUTE,
} from './constants';

const introRoute = (
  <Route
    key={1}
    exact
    path={CARD_ORDER_INTRO_ROUTE}
    component={requireAuthentication(cardOrderFlow(Intro))}
  />
);

const profileRoute = (
  <Route
    key={1}
    exact
    path={CARD_ORDER_PROFILE_ROUTE}
    component={requireAuthentication(cardOrderFlow(Profile))}
  />
);

const addressRoute = (
  <Route
    key={2}
    path={CARD_ORDER_ADDRES_ROUTE}
    component={requireAuthentication(cardOrderFlow(AddressComponent))}
  />
);

const idVerificationRoute = (
  <Route
    key={2}
    path={CARD_ORDER_ID_VERIFICATION_ROUTE}
    component={requireAuthentication(cardOrderFlow(IdVerification))}
  />
);

const addressVerificationRoute = (
  <Route
    key={3}
    path={CARD_ORDER_ADDRES_VERIFICATION_ROUTE}
    component={requireAuthentication(cardOrderFlow(AddressVerification))}
  />
);

const doneRoute = (
  <Route
    key={4}
    path={CARD_ORDER_DONE_ROUTE}
    component={authenticatedPage(cardOrderFlow(Done))}
  />
);

export default [
  introRoute,
  profileRoute,
  addressRoute,
  idVerificationRoute,
  addressVerificationRoute,
  doneRoute,
];
