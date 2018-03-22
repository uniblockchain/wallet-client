// @flow
import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Heading, PrimaryButton } from '../../ui';
import { FormFeedback } from '../../ui/form';
import confirmRoutine from './confirmRoutine';

const StyledHeading = styled(Heading)`
  color: #2a2a2a;
  margin-bottom: 50px;
`;

type Props = {
  error: string,
  confirm: () => void,
};

export const Confirm = ({ confirm, error }: Props) => (
  <div>
    <StyledHeading>Please confirm your details.</StyledHeading>
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

const ConfirmWithWallet = connect(mapStateToProps, mapDispatchToProps)(Confirm);
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;
