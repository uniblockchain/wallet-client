// @flow
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 40px;
`;

export const Top = styled.div`
  width: 100%;
  height: 100%;
`;

export const Bottom = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default { Content, Top, Bottom };
