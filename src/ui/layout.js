// @flow
import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const WrappedContent = Content.extend`
  padding: 5vh 10vw 10vh 10vw;
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

const CardWithTitle = props => (
  <div className={props.className}>
    <span className="title">{props.title}</span>
    <div className="content">{props.children}</div>
  </div>
);

export const Card = styled(CardWithTitle)`
  padding: 10px 20px 10px 20px;
  .title {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #00346b;
  }
`;

const EmptyDiv = ({ className }: any) => (
  <div className={className}>&nbsp;</div>
);

export const Divider = styled(EmptyDiv)`
  height: 6px;
  background-color: #f2f2f2;
`;

export default { Content, WrappedContent, Top, Bottom, Card, Divider };
