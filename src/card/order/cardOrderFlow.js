// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavigationDots } from '../../ui';
import Intro from './intro';
import AddressComponent from './address/AddressComponent';
import { IdVerification, AddressVerification } from './verification';
import Done from './done';
import {
  CARD_ORDER_INTRO_ROUTE,
  CARD_ORDER_ADDRES_ROUTE,
  CARD_ORDER_ID_VERIFICATION_ROUTE,
  CARD_ORDER_ADDRES_VERIFICATION_ROUTE,
  CARD_ORDER_DONE_ROUTE,
} from './constants';

export const BottomRow = styled.div`
  position: fixed;
  bottom: 70px;
  width: 100%;
  display: flex;
`;

export const NavigationDotsContainer = styled(BottomRow)`
  justify-content: center;
`;

const Container = styled.div`
  height: calc(100% - 100px);
`;

const BackLink = styled.span`
  padding-bottom: 4px;
  margin-left: 35px;
  font-size: 14px;
  text-align: left;
  color: #a1a1a1;
`;

const stepComponents = [
  Intro,
  AddressComponent,
  IdVerification,
  AddressVerification,
  Done,
];

const backButtonRoutes = [
  CARD_ORDER_INTRO_ROUTE,
  CARD_ORDER_ADDRES_ROUTE,
  CARD_ORDER_ID_VERIFICATION_ROUTE,
  CARD_ORDER_ADDRES_VERIFICATION_ROUTE,
  CARD_ORDER_DONE_ROUTE,
];

type Props = {};

const getActiveStepIndex = (WrappedComponent: *): number => {
  const WrappedComponentRendered = <WrappedComponent />;
  return stepComponents.findIndex(
    component => WrappedComponentRendered.type === component,
  );
};

export const cardOrderFlow = (WrappedComponent: *) => {
  const flow = (props: Props) => {
    const count = stepComponents.length;
    const activeIndex = getActiveStepIndex(WrappedComponent);

    return (
      <Container>
        <WrappedComponent {...props} />
        <NavigationDotsContainer>
          <NavigationDots count={count} activeIndex={activeIndex} />
        </NavigationDotsContainer>
        {activeIndex > 0 &&
          activeIndex < count - 1 && (
            <BottomRow>
              <Link id="back-link" to={backButtonRoutes[activeIndex - 1]}>
                <BackLink>Back</BackLink>
              </Link>
            </BottomRow>
          )}
      </Container>
    );
  };
  flow.displayName = `cardOrderFlow(${WrappedComponent.name})`;
  return connect()(flow);
};

export default cardOrderFlow;
