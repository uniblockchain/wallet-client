// @flow
import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Header, PrimaryButton } from '../../ui';
import { FormFeedback } from '../../ui/form';
import confirmRoutine from './confirmRoutine';

const StyledHeader = styled(Header)`
  color: #2a2a2a;
  margin-bottom: 50px;
`;

type Props = {
  error: string,
  confirm: () => void,
};

export const Confirm = ({ confirm, error }: Props) => (
  <div>
    <StyledHeader>Please confirm your details.</StyledHeader>
    {error && <FormFeedback>{error}</FormFeedback>}
    <PrimaryButton onClick={() => confirm()}>Confirm</PrimaryButton>
  </div>
);

Confirm.displayName = 'Confirm';

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  error: state.confirm.error,
});

const mapDispatchToProps = {
  confirm: confirmRoutine,
};

const reduxComponent = connect(mapStateToProps, mapDispatchToProps);
const ConfirmWithWallet = reduxComponent(Confirm);
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;
