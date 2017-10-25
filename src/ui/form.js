// @flow
import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 40px;
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

export default { Label, Input, Form, FormGroup };
