// @flow

import React from 'react';
import { Route } from 'react-router';
import AddressComponent from './address/AddressComponent';
import Intro from './intro';
import { IdVerification, AddressVerification } from './verification';
import Done from './done';
import cardOrderFlow from './cardOrderFlow';
import { authenticatedPage } from '../../page';
import {
  CARD_ORDER_INTRO_ROUTE,
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
    component={authenticatedPage(cardOrderFlow(Intro))}
  />
);

const addressRoute = (
  <Route
    key={2}
    path={CARD_ORDER_ADDRES_ROUTE}
    component={authenticatedPage(cardOrderFlow(AddressComponent))}
  />
);

const idVerificationRoute = (
  <Route
    key={2}
    path={CARD_ORDER_ID_VERIFICATION_ROUTE}
    component={authenticatedPage(cardOrderFlow(IdVerification))}
  />
);

const addressVerificationRoute = (
  <Route
    key={3}
    path={CARD_ORDER_ADDRES_VERIFICATION_ROUTE}
    component={authenticatedPage(cardOrderFlow(AddressVerification))}
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
  addressRoute,
  idVerificationRoute,
  addressVerificationRoute,
  doneRoute,
];
