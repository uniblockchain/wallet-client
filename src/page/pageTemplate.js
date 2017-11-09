// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import TopBar from '../ui/topBar';
import BottomNavigation from '../ui/bottomNavigation';
import { Content, Progress } from '../ui';
import menu from '../menu';

type Props = {
  blur: boolean,
  progress: boolean,
};

const blurInAnimation = keyframes`
  from {
    filter: blur(0px);
  }

  to {
    filter: blur(10px);
  }
`;

const blurOutAnimation = keyframes`
  from {
    filter: blur(10px);
  }

  to {
    filter: blur(0px);
  }
`;

const StyledContent = Content.extend`
  &.blur {
    filter: blur(10px);
  }
  &.blur-enter {
    animation: 200ms ${blurInAnimation};
  }

  &.blur-exit {
    animation: 200ms ${blurOutAnimation};
  }
`;

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  blur: !!state.page.blur,
  progress: !!state.page.showProgress,
});

export const pageTemplate = (WrappedComponent: *) => {
  const page = (props: Props) => (
    <CSSTransition in={props.blur} classNames="blur" timeout={200}>
      <StyledContent className={props.blur ? 'blur' : ''}>
        {props.progress && <Progress />}
        <TopBar />
        <WrappedComponent {...props} />
        <BottomNavigation menu={menu} />
      </StyledContent>
    </CSSTransition>
  );
  page.displayName = `page(${WrappedComponent.name})`;
  return connect(mapStateToProps, null)(page);
};

export default pageTemplate;
