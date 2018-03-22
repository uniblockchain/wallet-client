// @flow

import Webcam from '@cliener/react-webcam';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { Heading, Paragraph, PrimaryButton } from '../../../ui';
import { VERIFICATION_CONFIRM_ROUTE } from '../../constants';
import { type VerificationFileBase64 } from '../verificationFilesApi';
import { verificationPostRoutine } from '../verificationRoutine';

export type Props = {
  postVerification: VerificationFileBase64 => void,
  redirectToNextStep: () => void,
};

const LargeHeading = Heading.extend`
  font-size: 36px;
  margin-bottom: 22px;
`;

const WebcamContainer = styled.div`
  text-align: center;
`;

export class SelfieVerification extends Component<Props> {
  webcam: Webcam;

  setWebcam = (webcam: Webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const type = 'SELFIE';
    const base64Data = this.webcam.getScreenshot();
    this.props.postVerification({ type, base64Data });
    this.props.redirectToNextStep();
  };

  render() {
    return (
      <div>
        <LargeHeading alt>Your facial similarity check.</LargeHeading>
        <Paragraph alt>Please take a self-portrait of yourself.</Paragraph>
        <WebcamContainer>
          <Webcam
            audio={false}
            height={300}
            ref={this.setWebcam}
            screenshotFormat="image/jpeg"
            width={300}
          />
        </WebcamContainer>
        <PrimaryButton onClick={this.capture}>Capture photo</PrimaryButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    redirectToNextStep: () => dispatch(push(VERIFICATION_CONFIRM_ROUTE)),
    postVerification: payload => dispatch(verificationPostRoutine(payload)),
    dispatch,
  };
};

const ConnectedSelfieVerification = connect(null, mapDispatchToProps)(
  SelfieVerification,
);

export default ConnectedSelfieVerification;
