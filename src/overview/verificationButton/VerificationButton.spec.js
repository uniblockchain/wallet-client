// @flow

import { shallow } from 'enzyme';
import React from 'react';
import { GradientButton } from '../../ui';
import type { Props } from './VerificationButton';
import { VerificationButton } from './VerificationButton';

describe('Verification Button', () => {
  let component;

  const props: Props = {
    isVerified: true,
  };

  beforeEach(() => {
    component = shallow(<VerificationButton {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('does not render the verification button if you are already verified', () => {
    expect(component.find(GradientButton)).not.toBePresent();
  });

  it('renders the verification button if not verified', () => {
    component.setProps({ isVerified: false });
    expect(component.find(GradientButton)).toBePresent();
  });
});
