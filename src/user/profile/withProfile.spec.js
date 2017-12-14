import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import withProfile from './withProfile';

describe('withProfile higher-order component', () => {
  let component;
  let fakeReducer;
  let fakeStateGetter;
  let store;

  const FakeComponent = () => <h1>I am FakeComponent</h1>;
  const WrappedFakedComponent = withProfile(FakeComponent);

  beforeEach(() => {
    fakeStateGetter = () => ({ profile: { id: 123 } });
    fakeReducer = jest.fn(() => fakeStateGetter());
    store = createStore(combineReducers({ user: fakeReducer }));
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
});
