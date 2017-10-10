import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

// import { userReducer } from './user';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import tracker from './tracker';
import './index.css';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

const rootReducer = combineReducers({
  router: routerReducer,
  // ...otherReducers,
});

const middleware = [
  routerMiddleware(history),
  // ...otherMiddleware,
];

const storeEnhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, storeEnhancer);

tracker.initialize();

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        {/* <Route path="/about" component={About}/> */}
      </div>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
