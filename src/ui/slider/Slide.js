// @flow
import styled from 'styled-components';

const Slide = styled.div`
  padding: 1em;
  width: 100vw;
  height: 30vh;
  background-color: ${props =>
    props.alt ? props.theme.altBackground : props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Slide;
