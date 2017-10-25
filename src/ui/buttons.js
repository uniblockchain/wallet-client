// @flow
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  height: 44px;
  width: 100%;
  border-radius: 49px;
  background-color: #ffffff;
  color: #02bda5;
  border: 0;
  margin-bottom: 0.3125rem;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;

export const PrimaryButton = Button.extend`
  color: white;
  background-color: #00346b;
`;

export default { Button, PrimaryButton };
