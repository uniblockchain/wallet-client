// @flow

import React from 'react';
import { connect } from 'react-redux';
import { verificationUploadRoutine } from './verificationRoutine';

type Props = {
  dispatch: *,
  upload: *,
};

export const verificationFileUploader = (WrappedComponent: *, type: string) => {
  const uploader = (props: Props) => (
    <WrappedComponent
      {...props}
      onChoose={(fileList: FileList) => {
        const files: Array<File> = Array.from(fileList);

        files.forEach(file => {
          props.upload({ file, type });
        });
      }}
    />
  );
  uploader.displayName = `verificationFileUploader(${WrappedComponent.name})`;

  const mapDispatchToProps = {
    upload: verificationUploadRoutine,
  };

  return connect(null, mapDispatchToProps)(uploader);
};

export default verificationFileUploader;
