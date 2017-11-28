// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Header, Paragraph, WrappedContent, FileUpload } from '../ui';
import passport from './img/passport.png';

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
  width: 100%;
  margin-top: 36px;
`;

const Link = styled.a`
  color: #19c3ed;
  font-size: 14px;
`;

type Props = {
  onChoose: (files: Array<File>) => void,
};

const IdVerification = ({ onChoose }: Props) => {
  return (
    <WrappedContent>
      <LargeHeader alt>Your proof of identification</LargeHeader>
      <Paragraph alt>
        To verify your identity please upload a photo of your id card or
        passport identification page.
      </Paragraph>
      <LinkContainer>
        <Link href="#">Learn why</Link>
      </LinkContainer>
      <PassportImg src={passport} />
      <Buttons>
        <FileUpload type="camera" onChoose={onChoose} inline>
          Camera
        </FileUpload>
        <FileUpload onChoose={onChoose} inline>
          Upload
        </FileUpload>
      </Buttons>
    </WrappedContent>
  );
};

export default IdVerification;
