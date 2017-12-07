// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavigationDots } from '../../ui';
import Intro from './intro';
import AddressComponent from './address/AddressComponent';

export const NavigationDotsContainer = styled.div`
  position: fixed;
  bottom: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: calc(100% - 100px);
`;

const stepComponents = [Intro, AddressComponent];

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
      </Container>
    );
  };
  flow.displayName = `cardOrderFlow(${WrappedComponent.name})`;
  return connect(null, null)(flow);
};

export default cardOrderFlow;
