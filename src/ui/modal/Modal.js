// @flow
import * as React from 'react';
import { Portal } from 'react-portal';
import { connect } from 'react-redux';
import styled from 'styled-components';
import type { MapStateToProps } from 'react-redux';
import { PrimaryButton, Button } from '../buttons';
import { Divider } from '../layout';
import { Header, Paragraph } from '../text';

type ModalType = 'Confirmation' | 'Prompt';

type Props = {
  visible: boolean,
  title: string,
  description: string,
  type: ModalType,
  onConfirm: () => void,
  onCancel: () => void,
  children: any,
};

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const Box = styled.div`
  width: 90vw;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 15px 0 rgba(154, 154, 154, 0.5);
  display: flex;
  flex-direction: column;
  padding: 5vmin;
`;

const StyledHeader = Header.extend`
  font-size: 30px;
  color: ${props => props.theme.text};
`;

const StyledParagraph = Paragraph.extend`
  font-size: 16px;
  color: #2a2a2a;
`;

const CancelButton = Button.extend`
  text-transform: uppercase;
  font-size: 12px;
  height: 20px;
`;

const DoneButton = CancelButton.extend`
  color: #4fb9a3;
`;

export const Modal = (props: Props) => {
  if (!props.visible) {
    return null;
  }
  return (
    <Portal>
      <ModalBox>
        <Box>
          <StyledHeader>{props.title}</StyledHeader>
          <StyledParagraph>{props.description}</StyledParagraph>
          <div>{props.children}</div>
          {(() => {
            switch (props.type) {
              case 'Prompt':
                return (
                  <div>
                    <PrimaryButton onClick={props.onConfirm}>
                      Save
                    </PrimaryButton>
                    <Divider small />
                    <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
                  </div>
                );
              case 'Confirmation':
                return (
                  <div>
                    <Divider small />
                    <DoneButton onClick={props.onConfirm}>Done</DoneButton>
                  </div>
                );
              default:
                return null;
            }
          })()}
        </Box>
      </ModalBox>
    </Portal>
  );
};

Modal.defaultProps = {
  visible: false,
  description: '',
  type: 'Confirmation',
  onConfirm: () => {},
  onCancel: () => {},
  children: null,
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  visible: state.page.showModal,
});

export default connect(mapStateToProps, null)(Modal);
