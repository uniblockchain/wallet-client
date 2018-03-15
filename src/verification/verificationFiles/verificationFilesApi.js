// @flow

import { post } from '../../http';

export type VerificationFile = {
  +type: string,
  +file: string,
};

export type VerificationFileBase64 = {
  +type: string,
  +base64Data: string,
};

export const uploadFile = (
  verificationFile: VerificationFile,
): Promise<VerificationFile> => {
  const formData = new FormData();
  formData.append('type', verificationFile.type);
  formData.append('file', verificationFile.file);
  return post('/v1/verification-files', formData);
};

export const postFile = (
  verificationFile: VerificationFileBase64,
): Promise<VerificationFile> => {
  return post('/v1/verification-files', verificationFile);
};

export default { uploadFile, postFile };
