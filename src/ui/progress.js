// @flow
import React from 'react';
import { LinearProgress } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { DefaultTheme } from './theme';

const styles = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
  },
  colorPrimary: {
    backgroundColor: DefaultTheme.background,
  },
  barColorPrimary: {
    backgroundColor: DefaultTheme.main,
  },
};

export const Progress = withStyles(styles)(props => (
  <LinearProgress
    classes={{
      root: props.classes.root,
      colorPrimary: props.classes.colorPrimary,
      barColorPrimary: props.classes.barColorPrimary,
    }}
  />
));

export default { Progress };
