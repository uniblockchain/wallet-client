// @flow

export type Address = {
  +id: ?number,
  +streetAddress: ?string,
  +apartment: ?string,
  +countryCode: ?string,
  +postalCode: ?string,
  +city: ?string,
};

export type AddressForm = {
  +id: ?number,
  +streetAddress: ?string,
  +apartment: ?string,
  +country: ?string,
  +postalCode: ?string,
  +city: ?string,
};

export type AddressState = {
  ...Address,
  error: ?string,
};

export const initialAddressState: AddressState = {
  id: null,
  streetAddress: null,
  apartment: null,
  country: null,
  postalCode: null,
  city: null,
  error: null,
};

export default initialAddressState;
