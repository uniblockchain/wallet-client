// @flow
import React, { Component } from 'react';
import { Portal } from 'react-portal';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PrimaryButton, Button } from '../buttons';
import { Divider } from '../layout';
import { Header, Paragraph } from '../text';
import pageActions from '../../page/pageActions'; // FIXME

type ModalType = 'Confirmation' | 'Prompt';

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
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
  color: ${props => props.theme.main};
`;

const StyledParagraph = Paragraph.extend`
  margin: 28px 0;
`;

const CancelButton = Button.extend`
  text-transform: uppercase;
  font-size: 12px;
  height: 20px;
`;

CancelButton.displayName = 'CancelButton';

const DoneButton = CancelButton.extend`
  color: #4fb9a3;
`;

DoneButton.displayName = 'DoneButton';

export const DividerWithMargin = Divider.extend`
  margin: 16px 0 16px 0;
`;

type Props = {
  title: ?string,
  description: ?string,
  type: ModalType,
  onConfirm: () => void,
  onCancel: () => void,
  blur: boolean => void,
  children: any,
};

export class Modal extends Component<Props> {
  static defaultProps = {
    title: '',
    description: '',
    type: 'Confirmation',
    onConfirm: () => {},
    onCancel: () => {},
    blur: () => {},
    children: null,
  };

  componentDidMount() {
    this.props.blur(true);
  }

  componentWillUnmount() {
    this.props.blur(false);
  }

  render() {
    return (
      <Portal>
        <ModalBox>
          <Box>
            <StyledHeader>{this.props.title}</StyledHeader>
            {this.props.description && (
              <StyledParagraph alt>{this.props.description}</StyledParagraph>
            )}
            <div>{this.props.children}</div>
            {(() => {
              switch (this.props.type) {
                case 'Prompt':
                  return (
                    <div>
                      <PrimaryButton onClick={this.props.onConfirm}>
                        OK
                      </PrimaryButton>
                      <DividerWithMargin small />
                      <CancelButton onClick={this.props.onCancel}>
                        Cancel
                      </CancelButton>
                    </div>
                  );
                case 'Confirmation':
                  return (
                    <div>
                      <DividerWithMargin small />
                      <DoneButton onClick={this.props.onConfirm}>
                        Done
                      </DoneButton>
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
  }
}

const mapDispatchToProps = {
  blur: pageActions.blur,
};

export default connect(null, mapDispatchToProps)(Modal);
