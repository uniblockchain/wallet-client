// @flow

import config from 'react-global-configuration';
import { post } from '../../../http';

export type VerificationFile = {
  +type: string,
  +file: string,
};

const uploadDocument = (
  verificationFile: VerificationFile,
): Promise<VerificationFile> => {
  const formData = new FormData();
  formData.append('type', verificationFile.type);
  formData.append('file', verificationFile.file);
  return post('/v1/verification-files', formData);
};
export default { uploadDocument };
