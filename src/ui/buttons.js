// @flow
import styled from 'styled-components';

export const Button = styled.button`
  display: ${props => (props.inline ? 'inline' : 'block')};
  width: ${props => (props.inline ? 'fit-content' : '100%')};
  padding: 0 2em 0 2em;
  height: 44px;
  border-radius: 49px;
  background-color: #ffffff;
  color: #a1a1a1;
  border: 0;
  margin-bottom: 0.3125rem;
  font-size: 16px;
  font-weight: bold;

  a {
    color: #a1a1a1;
  }
`;

export const PrimaryButton = Button.extend`
  color: white;
  background-color: ${props => props.theme.text};
  text-transform: uppercase;

  a {
    color: white;
  }
`;

export default { Button, PrimaryButton };
