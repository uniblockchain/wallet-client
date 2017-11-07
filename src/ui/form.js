// @flow
import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #02bda5;
`;

export const Input = styled.input`
  font-size: 16px;
  ::placeholder {
    color: #cccccc;
  }
`;

export const Form = (props: any) => <form {...props} />;

export const FormGroup = (props: any) => (
  <div className="form-group" {...props} />
);

export const FormRow = (props: any) => <div className="form-row" {...props} />;

export const Col = (props: any) => <div className="col" {...props} />;

export default {
  Label,
  Input,
  Form,
  FormGroup,
  FormRow,
  Col,
};
