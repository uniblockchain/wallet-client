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
  primaryColor: {
    backgroundColor: DefaultTheme.background,
  },
  primaryColorBar: {
    backgroundColor: DefaultTheme.main,
  },
};

export const Progress = withStyles(styles)(props => (
  <LinearProgress
    classes={{
      root: props.classes.root,
      primaryColor: props.classes.primaryColor,
      primaryColorBar: props.classes.primaryColorBar,
    }}
  />
));

export default { Progress };
