// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history, store } from './reduxStore';
import App from './App';
import { Wallet } from './wallet';
import { Signup } from './signup';
import registerServiceWorker from './registerServiceWorker';
import tracker from './tracker';
import configuration from './configuration';
import './index.css';

configuration.initialize();

tracker.initialize();

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/signup" component={Signup} />
      </div>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
