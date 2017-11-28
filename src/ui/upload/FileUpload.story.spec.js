// @flow
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  storiesOf,
  action,
  specs,
  describe,
  beforeEach,
  it,
} from '../../../.storybook/facade';
import FileUpload from './FileUpload';

storiesOf('Controls', module).add('File Upload', () => {
  specs(() =>
    describe('File Upload', () => {
      let component;

      beforeEach(() => {
        component = shallow(<FileUpload />);
      });
      it('renders file upload component', () => {
        expect(component);
      });
    }),
  );

  return (
    <div>
      <FileUpload onChoose={action('file chosen')}>Upload</FileUpload>
      <FileUpload onChoose={action('file chosen')} type="camera">
        Camera
      </FileUpload>
    </div>
  );
});
