// @flow

export const SECRET_REMOVE = '@multiFactorAuth/SECRET_REMOVE';

export type RemoveSecret = {|
  +type: '@multiFactorAuth/SECRET_REMOVE',
|};

export type MultiFactorAuthAction = RemoveSecret;

export const removeSecret = (): RemoveSecret => ({
  type: SECRET_REMOVE,
});

export default {
  removeSecret,
};
