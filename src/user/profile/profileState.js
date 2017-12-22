// @flow

import moment from 'moment-es6';
import {
  type AddressState,
  initialAddressState,
} from '../../card/order/address/addressState';

export type Profile = {
  +id: ?number,
  +firstName: ?string,
  +lastName: ?string,
  +dateOfBirth: ?moment,
  +mobileNumber: ?string,
  address: ?AddressState,
};

export type ProfileState = {
  ...Profile,
  error: ?string,
};

export const initialProfileState: ProfileState = {
  id: null,
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  mobileNumber: null,
  error: null,
  address: initialAddressState,
};

export default initialProfileState;
