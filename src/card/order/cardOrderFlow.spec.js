import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cardOrderFlow from './cardOrderFlow';
import { NavigationDots, Progress } from '../../ui';
import Intro from './intro';
import Done from './done';
import { IdVerification } from './verification';
import { pageReducer } from '../../page';

jest.mock('./cardOrderApi', () => ({
  hasOrder: jest.fn(() => Promise.resolve(false)),
}));

describe('cardOrderFlow higher-order component', () => {
  let component;
  let store;

  const history = createHistory();
  const initialComponent = IdVerification;
  const WrappedComponent = cardOrderFlow(initialComponent);

  beforeEach(() => {
    store = createStore(
      combineReducers({ router: routerReducer, page: pageReducer }),
      applyMiddleware(routerMiddleware(history)),
    );
    component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <WrappedComponent />
        </ConnectedRouter>
      </Provider>,
    );
  });

  it('renders the component', () => {
    expect(component);
    expect(component.find(initialComponent)).toHaveLength(1);
  });

  it('does not show progress when not loading', () => {
    expect(component.find(Progress)).toHaveLength(0);
  });

  it('renders navigation dots', () => {
    expect(component.find(NavigationDots)).toHaveLength(1);
  });

  it('do not renders back link on intro', () => {
    const WrappedIntroComponent = cardOrderFlow(Intro);

    component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <WrappedIntroComponent />
        </ConnectedRouter>
      </Provider>,
    );

    expect(component.find('Link#back-link')).toHaveLength(0);
  });

  it('do not renders back link on done', () => {
    const WrappedDoneComponent = cardOrderFlow(Done);

    component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <WrappedDoneComponent />
        </ConnectedRouter>
      </Provider>,
    );

    expect(component.find('Link#back-link')).toHaveLength(0);
  });

  it('renders back link when further from intro', () => {
    expect(component.find('Link#back-link')).toHaveLength(1);
  });
});
