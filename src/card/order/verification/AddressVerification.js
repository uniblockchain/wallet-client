// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Header, Paragraph, FileUpload } from '../../../ui';
import address from './img/address.png';
import verificationFileUploader from './verificationFileUploader';
import { CARD_ORDER_CONFIRM_ROUTE } from '../constants';

const LargeHeader = Header.extend`
  font-size: 36px;
  margin-bottom: 22px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddressImg = styled.img`
  width: 100%;
  margin: 23px 0 33px 0;
`;

const Link = styled.a`
  color: #19c3ed;
  font-size: 14px;
`;

const List = styled.ul`
  padding-left: 16px;

  & li {
    color: #19c3ed;
    font-size: 16px;
    list-style-type: disc;
  }

  & li span {
    font-family: Usual;
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
      <LargeHeader alt>Address verification</LargeHeader>
      <Paragraph alt>
        To finish the process we need a proof of address.
      </Paragraph>
      <LinkContainer>
        <Link href="#">Learn why</Link>
      </LinkContainer>
      <AddressImg src={address} />
      <Paragraph alt>
        Please upload one of the following documents with your address and full
        name on it:
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
      redirectToNextStep: () => push(CARD_ORDER_CONFIRM_ROUTE),
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
