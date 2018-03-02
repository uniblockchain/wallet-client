// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import variables from '../landing/variables';
import { Header, Top, WrappedContent } from '../ui';
import { withUser } from '../user';
import type { User } from '../user/userState';
import MultiFactorAuth, { openMultiFactorAuthModal } from './multiFactorAuth';

const StyledList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  list-style: none;
  text-transform: uppercase;
  padding: 18px 0 18px 0;
  border-bottom: 1px solid ${variables.colorNeutralLightest};
  cursor: pointer;
`;

const Item = styled.span`
  color: ${variables.colorNeutral};
`;

const Status = styled.span`
  color: #02bda5;
`;

export type Props = {
  user: User,
  openMultiFactorAuthModal: () => void,
};

export const Settings = ({ user, openMultiFactorAuthModal }: Props) => (
  <WrappedContent>
    <Top>
      <Header alt>My account</Header>
      <StyledList>
        <StyledListItem onClick={openMultiFactorAuthModal}>
          <Item>2-Factor Authentication</Item>
          <Status>{user.isUsing2Fa ? 'On' : 'Off'}</Status>
        </StyledListItem>
      </StyledList>
    </Top>
    <MultiFactorAuth />
  </WrappedContent>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  openMultiFactorAuthModal,
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(
  Settings,
);

export default withUser(ConnectedSettings);
