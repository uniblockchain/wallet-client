// @flow

import * as React from 'react';
import { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {},
  top: {
    padding: '20px 40px 10px 40px',
  },
});

type Props = {
  classes: Object,
};

export class Top extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.top}>
        <div className="text-right">
          <button type="button" className="btn btn-primary bmd-btn-icon">
            <i className="material-icons">more_horiz</i>
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Top);
