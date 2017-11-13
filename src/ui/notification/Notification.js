// @flow
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

type Props = {
  open: boolean,
  message: string,
  onClose: () => void,
};

const Notification = (props: Props) => (
  <Snackbar
    open={props.open}
    autoHideDuration={1200}
    onRequestClose={props.onClose}
    message={<span>{props.message}</span>}
  />
);
export default Notification;
