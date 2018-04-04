// @flow
import React from 'react';
import styled from 'styled-components';

type FileUploadProps = {
  type: 'camera' & 'upload',
  name: string,
  children: any,
  onChoose: (files: Array<File>) => void,
};

const uploadFile = onChoose => ({ target }) => {
  onChoose(target.files);
};

const FileUploadBase = ({
  type,
  name,
  children,
  onChoose,
  ...props
}: FileUploadProps) => (
  <label htmlFor={name} {...props}>
    <input
      type="file"
      name={name}
      onChange={uploadFile(onChoose)}
      capture={type === 'camera' ? 'environment' : null}
      accept={type === 'camera' ? 'image/*;capture=camera' : 'image/*'}
    />
    {children}
  </label>
);

const FileUpload = styled(FileUploadBase)`
  display: inline;
  width: fit-content;
  padding: 14px 32px 14px 32px;
  height: 44px;
  border-radius: 49px;
  color: #02bda5;
  background-color: #e5f9f3;
  box-shadow: 0 2px 6px 0 rgba(2, 189, 165, 0.4);
  border: 0;
  margin-bottom: 6px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default FileUpload;
