// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { MultiFactorAuth } from './MultiFactorAuth';
import Modal from '../../ui/modal/Modal';
import type { Props } from './MultiFactorAuth';

describe('MultiFactorAuth component', () => {
  let props: Props;
  let component;

  beforeEach(() => {
    props = {
      fetchNewQRCode: jest.fn(),
      password: 'asdfg',
      email: 'margus@getchange.com',
      secret: '43254326543',
      shouldShowConfirmationModal: false,
      shouldShowQRCodeModal: false,
      closeModal: jest.fn(),
      error: null,
    };
  });

  it('renders the component', () => {
    component = shallow(<MultiFactorAuth {...props} />);

    expect(component);
    expect(component.find(Modal)).not.toBePresent();
  });

  it('renders the confirmation modal', () => {
    props.shouldShowConfirmationModal = true;

    component = shallow(<MultiFactorAuth {...props} />);

    expect(component);
    expect(component.find(Modal)).toHaveLength(1);
  });

  it('renders the QR code modal', () => {
    props.shouldShowQRCodeModal = true;

    component = shallow(<MultiFactorAuth {...props} />);

    expect(component);
    expect(component.find(Modal)).toHaveLength(1);
  });
});
