// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import routes from './routes';

type Props = {
  wallet: ?boolean,
  overview: ?boolean,
};

const AppRouter = (props: Props) => {
  if (props.wallet) {
    return <Redirect to={routes.WALLET} />;
  } else if (props.overview) {
    return <Redirect to={routes.OVERVIEW} />;
  }
  throw new Error('Route is not set');
};

export default AppRouter;
