// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';

import { history, store } from './reduxStore';
import App from './App';
import { Wallet, Receive } from './wallet';
import { Signup } from './signup';
import { Login } from './login';
import { Overview } from './overview';
import { Card } from './card';
import { Marketplace } from './marketplace';
import { Landing } from './landing';
import { unregister } from './registerServiceWorker';
import tracker from './tracker';
import configuration from './configuration';
import requireAuthentication from './requireAuthentication';
import './index.css';

configuration.initialize();

tracker.initialize();

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/landing" component={Landing} />
        <Route path="/overview" component={requireAuthentication(Overview)} />
        <Route path="/wallet" component={requireAuthentication(Wallet)} />
        <Route path="/receive" component={requireAuthentication(Receive)} />
        <Route path="/card" component={requireAuthentication(Card)} />
        <Route
          path="/marketplace"
          component={requireAuthentication(Marketplace)}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </ReduxProvider>,
  // $FlowFixMe
  document.getElementById('root'),
);

unregister();
