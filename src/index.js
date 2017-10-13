// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import { Container } from 'reactstrap';

import { history, store } from './reduxStore';
import App from './App';
import { Wallet } from './wallet';
import registerServiceWorker from './registerServiceWorker';
import tracker from './tracker';
import configuration from './configuration';
import './index.css';

configuration.initialize();

tracker.initialize();

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <Container>
        <Route exact path="/" component={App} />
        <Route path="/wallet" component={Wallet} />
      </Container>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
