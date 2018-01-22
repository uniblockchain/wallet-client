// @flow
import resetPasswordSagasImport from './resetPasswordSagas';
import ResetPassword from './ResetPassword';
import ResetPasswordDoneImport from './ResetPasswordDone';

export const resetPasswordSagas = resetPasswordSagasImport;
export const ResetPasswordDone = ResetPasswordDoneImport;
export default ResetPassword;
