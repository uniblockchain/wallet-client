// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './Signup';
import type { Props } from './Signup';

jest.mock('../redux/reduxStore');

describe('Signup component', () => {
  let component;
  const props: Props = {
    authenticated: false,
  };

  beforeEach(() => {
    component = shallow(<Signup {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
