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
import registerServiceWorker from './registerServiceWorker';
import tracker from './tracker';
import configuration from './configuration';

configuration.initialize();

tracker.initialize();

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
      {/* <Route path="/about" component={About}/> */}
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
