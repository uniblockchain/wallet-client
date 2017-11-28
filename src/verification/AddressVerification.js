// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Header, Paragraph, WrappedContent, FileUpload } from '../ui';
import address from './img/address.png';

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
  onChoose: (files: Array<File>) => void,
};

const AddressVerification = ({ onChoose }: Props) => {
  return (
    <WrappedContent>
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

export default AddressVerification;
