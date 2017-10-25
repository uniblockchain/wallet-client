// @flow
import styled from 'styled-components';
import { Card as MaterialCard } from 'material-ui';

export const Content = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const WrappedContent = Content.extend`
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

export const Card = styled(MaterialCard)``;

export default { Content, WrappedContent, Top, Bottom, Card };
