// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';

import { history, store } from './reduxStore';
import App from './App';
import { Wallet, Send, Receive } from './wallet';
import { Signup } from './signup';
import { Login } from './login';
import { Overview } from './overview';
import { Card } from './card';
import { Marketplace } from './marketplace';
import { Landing } from './landing';
import { Settings } from './settings';
import { unregister } from './registerServiceWorker';
import tracker from './tracker';
import configuration from './configuration';
import requireAuthentication from './requireAuthentication';
import { GreenTheme } from './ui';
import './index.css';

configuration.initialize();

tracker.initialize();

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={GreenTheme}>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/landing" component={Landing} />
          <Route path="/overview" component={requireAuthentication(Overview)} />
          <Route path="/wallet" component={requireAuthentication(Wallet)} />
          <Route path="/send" component={requireAuthentication(Send)} />
          <Route path="/receive" component={requireAuthentication(Receive)} />
          <Route path="/card" component={requireAuthentication(Card)} />
          <Route
            path="/marketplace"
            component={requireAuthentication(Marketplace)}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
        </div>
      </ThemeProvider>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

unregister();
