// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import GradientText from './GradientText';

const Container = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeHuge};
  font-weight: ${variables.fontWeightBold};
  letter-spacing: -1px;
  line-height: 1;
  position: relative;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeMassive};
  `};
`;

const Word = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: none;
  transform: ${props =>
    'translateX(-50%) ' + (props.active ? '' : ' translateY(50%)')};
  transition: all 0.3s;
`;

type Props = {
  words: Array<string>,
};

type State = {
  activeWord: number,
};

class HeroWords extends React.Component<Props, State> {
  intervalId: any;

  state = {
    activeWord: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const nextWord =
        this.state.activeWord >= this.props.words.length - 1
          ? 0
          : this.state.activeWord + 1;
      this.setState({ activeWord: nextWord });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Container>
        {this.props.words.map((word, i) => (
          <Word key={i} active={i === this.state.activeWord}>
            <GradientText>{word}</GradientText>
          </Word>
        ))}
      </Container>
    );
  }
}

export default HeroWords;
