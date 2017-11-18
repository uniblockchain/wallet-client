// @flow
import React from 'react';
import styled from 'styled-components';

const ErrorDiv = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 36px;
`;

export const Page404 = () => (
  <ErrorDiv>
    <div>Oops!</div>
    <div>404</div>
    <div>Page not found</div>
  </ErrorDiv>
);

export default Page404;
