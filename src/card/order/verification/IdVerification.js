// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Header, Paragraph, FileUpload } from '../../../ui';
import passport from './img/passport.png';
import verificationFileUploader from './verificationFileUploader';
import { CARD_ORDER_ADDRES_VERIFICATION_ROUTE } from '../constants';

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

const PassportImg = styled.img`
  max-height: 220px;
  max-width: 280px;
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;
`;

const Link = styled.a`
  color: #19c3ed;
  font-size: 14px;
`;

type Props = {
  onChoose: (fileList: FileList) => void,
  redirectToNextStep: () => void,
};

export const IdVerification = ({ onChoose, redirectToNextStep }: Props) => {
  const chooseAndGoToNextStep = (fileList: FileList) => {
    onChoose(fileList);
    redirectToNextStep();
  };

  return (
    <div>
      <LargeHeader alt>Your proof of identification</LargeHeader>
      <Paragraph alt>
        To verify your identity please upload a photo (less than 10MB) of your
        id card or passport identification page.
      </Paragraph>
      <LinkContainer>
        <Link href="#">Learn why</Link>
      </LinkContainer>
      <PassportImg src={passport} />
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
      redirectToNextStep: () => push(CARD_ORDER_ADDRES_VERIFICATION_ROUTE),
    },
    dispatch,
  );

IdVerification.displayName = 'IdVerification';

const component = connect(null, mapDispatchToProps)(IdVerification);
const IdVerificationWithFileUploader = verificationFileUploader(
  component,
  'ID',
);
IdVerificationWithFileUploader.displayName = 'IdVerification';
export default IdVerificationWithFileUploader;
