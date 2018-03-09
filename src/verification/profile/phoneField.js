// @flow

import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import { Field } from 'redux-form';
import { get } from '../../http';
import '../../../node_modules/react-intl-tel-input/dist/libphonenumber';
import '../../../node_modules/react-intl-tel-input/dist/main.css';

const countryCodeLookup = (callback): Promise<boolean> =>
  get('https://ipinfo.io/json').then(response => {
    const countryCode = response && response.country ? response.country : '';
    callback(countryCode);
  });

const telephoneInput: any => any = field => {
  const onChangeHandler = (name, isValid, value, countryData) =>
    field.input.onChange(countryData);

  return (
    <IntlTelInput
      css={['intl-tel-input', 'form-control']}
      utilsScript="libphonenumber"
      onPhoneNumberChange={onChangeHandler}
      onPhoneNumberBlur={onChangeHandler}
      style={{ width: '100%' }}
      defaultCountry="auto"
      geoIpLookup={countryCodeLookup}
      value={field.input.value}
      autoHideDialCode={false}
      format
      nationalMode={false}
    />
  );
};

export const PhoneField = () => (
  <Field name="phoneNumber" component={telephoneInput} />
);

export default PhoneField;
