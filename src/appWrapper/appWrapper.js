// @flow

import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${breakpoint('landscape')`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

export const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  ${breakpoint('landscape')`
      width: 375px;
      height: 650px;
      border-radius: 5px;
      box-shadow: 0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22);
    `};
`;

export const appWrapper = (WrappedComponent: *) => {
  const wrapper = (props: *) => (
    <AppWrapper>
      <ContentWrapper>
        <WrappedComponent {...props} />
      </ContentWrapper>
    </AppWrapper>
  );
  wrapper.displayName = WrappedComponent.name;
  return wrapper;
};

export default appWrapper;
