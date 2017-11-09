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

import pageTemplate from './pageTemplate';
import BottomNavigation from '../ui/bottomNavigation';
import TopBar from '../ui/topBar';
import { Progress } from '../ui';

describe('pageTemplate higher-order component', () => {
  let component;
  let fakeReducer;
  let fakeStateGetter;
  let store;

  const history = createHistory();

  const FakeComponent = () => <h1>I am FakeComponent</h1>;
  const WrappedFakedComponent = pageTemplate(FakeComponent);

  beforeEach(() => {
    fakeStateGetter = () => ({ blur: false, showProgress: true });
    fakeReducer = jest.fn(() => fakeStateGetter());
    store = createStore(
      combineReducers({ page: fakeReducer, router: routerReducer }),
      applyMiddleware(routerMiddleware(history)),
    );
    component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <WrappedFakedComponent />
        </ConnectedRouter>
      </Provider>,
    );
  });

  it('renders the component', () => {
    expect(component);
    expect(component.text()).toContain('I am FakeComponent');
  });

  it('renders BottomNavigation component', () => {
    expect(component.find(BottomNavigation).length).toBe(1);
  });

  it('renders TopBar component', () => {
    expect(component.find(TopBar).length).toBe(1);
  });

  it('renders progress', () => {
    expect(component.find(Progress)).toHaveLength(1);
  });
});
