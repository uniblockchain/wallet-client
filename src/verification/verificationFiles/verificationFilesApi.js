// @flow

import config from 'react-global-configuration';
import { post } from '../../http';

export type VerificationFile = {
  +type: string,
  +file: string,
};

export type VerificationFileBase64 = {
  +type: string,
  +base64Data: string,
};

const apiEndpoint = '/v1/verification-files';
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export const uploadFile = (
  verificationFile: VerificationFile,
): Promise<VerificationFile> => {
  const formData = new FormData();
  formData.append('type', verificationFile.type);
  formData.append('file', verificationFile.file);
  return post(
    iOS ? apiEndpoint : `${config.get('apiUrl')}${apiEndpoint}`,
    formData,
  );
};

export const postFile = (
  verificationFile: VerificationFileBase64,
): Promise<VerificationFile> => {
  return post(`${config.get('apiUrl')}${apiEndpoint}`, verificationFile);
};

export default { uploadFile, postFile };
