import { mount } from 'enzyme';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pageReducer } from '../../page';
import { NavigationDots, Progress } from '../../ui';
import cardOrderFlow from './cardOrderFlow';
import Done from './done';
import Intro from './intro';
import { IdVerification } from './verification';

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
    const fakeStateGetter = () => ({ profile: { address: { id: 123 } } });
    const fakeReducer = jest.fn(() => fakeStateGetter());
    store = createStore(
      combineReducers({
        router: routerReducer,
        page: pageReducer,
        user: fakeReducer,
      }),
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
