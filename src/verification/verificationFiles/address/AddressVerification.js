// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { FileUpload, Heading, Paragraph } from '../../../ui';
import { VERIFICATION_SELFIE_VERIFICATION_ROUTE } from '../../constants';
import verificationFileUploader from '../verificationFileUploader';
import address from './img/address.png';
import variables from '../../../ui/variables';

const LargeHeading = Heading.extend`
  font-size: 36px;
  margin-bottom: 22px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddressImg = styled.img`
  width: 100%;
  margin: 23px 0 33px 0;
`;

const List = styled.ul`
  padding-left: 16px;

  & li {
    color: #19c3ed;
    font-size: 16px;
    list-style-type: disc;
  }

  & li span {
    font-family: ${variables.fontPrimary};
    font-size: 14px;
    color: #2a2a2a;
  }
`;

type Props = {
  onChoose: (fileList: FileList) => void,
  redirectToNextStep: () => void,
};

export const AddressVerification = ({
  onChoose,
  redirectToNextStep,
}: Props) => {
  const chooseAndGoToNextStep = (fileList: FileList) => {
    onChoose(fileList);
    redirectToNextStep();
  };

  return (
    <div>
      <LargeHeading alt>Your proof of address.</LargeHeading>
      <AddressImg src={address} />
      <Paragraph alt>
        Please upload (less than 10MB) one of the following documents with your
        address and full name on it:
      </Paragraph>
      <List>
        <li>
          <span>Utility bill (water, electricity, gas, etc)</span>
        </li>
        <li>
          <span>Signed bank statement</span>
        </li>
        <li>
          <span>Real estate lease contract</span>
        </li>
      </List>
      <Buttons>
        <FileUpload type="camera" onChoose={chooseAndGoToNextStep}>
          Camera
        </FileUpload>
        <FileUpload onChoose={chooseAndGoToNextStep}>Upload</FileUpload>
      </Buttons>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      redirectToNextStep: () => push(VERIFICATION_SELFIE_VERIFICATION_ROUTE),
    },
    dispatch,
  );

const component = connect(null, mapDispatchToProps)(AddressVerification);
const AddressVerificationWithFileUploader = verificationFileUploader(
  component,
  'ADDRESS',
);
AddressVerificationWithFileUploader.displayName = 'AddressVerification';
export default AddressVerificationWithFileUploader;
