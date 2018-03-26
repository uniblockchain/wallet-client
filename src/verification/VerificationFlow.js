// @flow
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavigationDots, Progress, WrappedContent } from '../ui';
import {
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_SELFIE_VERIFICATION_ROUTE,
} from './constants';

export const NavigationDotsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: -1.7em;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BackLink = styled.span`
  font-size: 14px;
  text-align: left;
  color: #a1a1a1;
`;

const stepComponents = [
  'Intro',
  'Profile',
  'AddressComponent',
  'IdVerification',
  'AddressVerification',
  'SelfieVerification',
  'Confirm',
];

const backButtonRoutes = [
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_SELFIE_VERIFICATION_ROUTE,
];

const getActiveStepIndex = (WrappedComponent: *): number => {
  return stepComponents.findIndex(component => {
    if (WrappedComponent.displayName) {
      return (
        WrappedComponent.displayName === component ||
        WrappedComponent.displayName.includes(`(${component})`)
      );
    }
    return false;
  });
};

export const verificationFlow = (WrappedComponent: *) => {
  const flow = (props: any) => {
    const count = stepComponents.length;
    const activeIndex = getActiveStepIndex(WrappedComponent);
    return (
      <Container>
        {props.progress && <Progress />}
        <WrappedContent>
          <WrappedComponent {...props} />
          <NavigationDotsContainer>
            <NavigationDots count={count} activeIndex={activeIndex} />
          </NavigationDotsContainer>
          {activeIndex > 0 && (
            <Link id="back-link" to={backButtonRoutes[activeIndex - 1]}>
              <BackLink>Back</BackLink>
            </Link>
          )}
        </WrappedContent>
      </Container>
    );
  };
  const mapStateToProps: MapStateToProps<*, *, *> = state => ({
    progress: state.page.showProgress,
  });

  const connectedFlow = connect(mapStateToProps)(flow);
  connectedFlow.displayName = `verificationFlow(${WrappedComponent.name})`;

  return connectedFlow;
};

export default verificationFlow;
