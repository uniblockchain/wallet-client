// @flow

import React from 'react';
import { Route } from 'react-router';
import AddressComponent from './address/AddressComponent';
import Intro from './intro';
import cardOrderFlow from './cardOrderFlow';
import { authenticatedPage } from '../../page';
import { CARD_ORDER_INTRO_ROUTE, CARD_ORDER_ADDRES_ROUTE } from './constants';

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

export default [introRoute, addressRoute];
