// @flow
import React from 'react';
import jest from 'jest-mock';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  storiesOf,
  action,
  select,
  describe,
  it,
  specs,
  beforeEach,
} from '../../../.storybook/facade';
import { Modal } from './Modal';

storiesOf('Structure', module).add('Modal', () => {
  specs(() =>
    describe('Modal', () => {
      let component;
      let props;

      beforeEach(() => {
        props = {
          title: 'Title',
          visible: true,
          type: 'Prompt',
          onConfirm: jest.fn(),
          onCancel: jest.fn(),
        };
        component = shallow(<Modal {...props} />);
      });

      it('renders the component', () => {
        expect(component);
      });

      it('prompt renders primary and cancel buttons', () => {
        expect(component.find('PrimaryButton')).toBePresent();
        expect(component.find('CancelButton')).toBePresent();
      });

      it('clicking on prompt confirmation fires listener', () => {
        const confirmButton = component.find('PrimaryButton');
        confirmButton.simulate('click');
        expect(props.onConfirm.mock.calls).toHaveLength(1);
      });

      it('clicking on prompt cancel fires listener', () => {
        const cancelButton = component.find('CancelButton');
        cancelButton.simulate('click');
        expect(props.onCancel.mock.calls).toHaveLength(1);
      });

      it('confirm renders primary and cancel buttons', () => {
        component = shallow(<Modal {...props} type="Confirmation" />);
        expect(component.find('DoneButton')).toBePresent();
        expect(component.find('CancelButton')).not.toBePresent();
      });

      it('clicking on confirmation confirm button fires listener', () => {
        component = shallow(<Modal {...props} type="Confirmation" />);
        const confirmButton = component.find('DoneButton');
        confirmButton.simulate('click');
        expect(props.onConfirm.mock.calls).toHaveLength(1);
      });
    }),
  );

  const options = {
    Confirmation: 'Confirmation',
    Prompt: 'Prompt',
  };
  return (
    <Modal
      title="Primary Wallet"
      visible
      description="Set the cryptocurrency you want to use when making card payments"
      type={select('Type', options)}
      onConfirm={action('confirm')}
      onCancel={action('cancel')}
    >
      Some content here
    </Modal>
  );
});
