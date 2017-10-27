import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { push } from 'react-router-redux';

import withWallet from './withWallet';

describe('withWallet higher-order component', () => {
  let component;
  let fakeReducer;
  let fakeStateGetter;
  let store;

  const FakeComponent = () => <h1>I am FakeComponent</h1>;
  const WrappedFakedComponent = withWallet(FakeComponent);

  beforeEach(() => {
    fakeStateGetter = () => ({ wallets: [{}] });
    fakeReducer = jest.fn(() => fakeStateGetter());
    store = createStore(combineReducers({ wallet: fakeReducer }));
    component = mount(
      <Provider store={store}>
        <WrappedFakedComponent />
      </Provider>,
    );
  });

  it('renders the component', () => {
    expect(component);
    expect(component.text()).toContain('I am FakeComponent');
  });

  //TODO: test fetching wallets when needed
});
