// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import routes from './routes';
import { CARD_ORDER_INTRO_ROUTE } from '../card/order/constants';

type Props = {
  wallet: ?boolean,
  overview: ?boolean,
  cardOrderFlow: ?boolean,
  card: ?boolean,
};

const AppRouter = (props: Props) => {
  if (props.wallet) {
    return <Redirect to={routes.WALLET} />;
  } else if (props.overview) {
    return <Redirect to={routes.OVERVIEW} />;
  } else if (props.cardOrderFlow) {
    return <Redirect to={CARD_ORDER_INTRO_ROUTE} />;
  } else if (props.card) {
    return <Redirect to={routes.CARD} />;
  }
  throw new Error('Route is not set');
};

export default AppRouter;
