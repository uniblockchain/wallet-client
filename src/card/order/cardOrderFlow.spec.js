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
import { NavigationDots } from '../../ui';

describe('cardOrderFlow higher-order component', () => {
  let component;
  let fakeReducer;
  let fakeStateGetter;
  let store;

  const history = createHistory();

  const FakeComponent = () => <h1>I am FakeComponent</h1>;
  const WrappedFakedComponent = cardOrderFlow(FakeComponent);

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

  it('renders navigation dots', () => {
    expect(component.find(NavigationDots)).toHaveLength(1);
  });
});
