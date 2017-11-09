// @flow
import styled from 'styled-components';

const Slide = styled.div`
  padding: 1em;
  width: 100vw;
  height: 240px;
  background-color: ${props =>
    props.alt ? props.theme.altBackground : props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Slide;
