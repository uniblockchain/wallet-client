// @flow
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  height: 44px;
  width: 100%;
  border-radius: 49px;
  background-color: #ffffff;
  color: #a1a1a1;
  border: 0;
  margin-bottom: 0.3125rem;
  font-size: 16px;
  font-weight: bold;
`;
export const PrimaryButton = Button.extend`
  color: white;
  background-color: #02bda5;
  text-transform: uppercase;
`;

export default { Button, PrimaryButton };
