// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { Heading, Top, WrappedContent } from '../ui';
import variables from '../ui/variables';
import { withUser } from '../user';
import type { User } from '../user/userState';
import { VERIFICATION_INTRO_ROUTE } from '../verification/constants';
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

const LinkItem = Item.withComponent(Link);

const Status = styled.span`
  color: #02bda5;
`;

export type Props = {
  user: User,
  open2FaAuthModal: () => void,
  goTo: string => void,
  noop: () => void,
};

export const Settings = ({ user, open2FaAuthModal, goTo, noop }: Props) => (
  <WrappedContent>
    <Top>
      <Heading alt>My account</Heading>
      <StyledList>
        <StyledListItem onClick={open2FaAuthModal}>
          <Item>2-Factor Authentication</Item>
          <Status>{user.isUsing2Fa ? 'On' : 'Off'}</Status>
        </StyledListItem>
        <StyledListItem
          onClick={() =>
            !user.isVerified ? goTo(VERIFICATION_INTRO_ROUTE) : noop
          }
        >
          <Item>Verification Status</Item>
          <Status>{user.isVerified ? 'Verified' : 'Not Verified'}</Status>
        </StyledListItem>
        <StyledListItem onClick={open2FaAuthModal}>
          <LinkItem to="/logout">Log Out</LinkItem>
        </StyledListItem>
      </StyledList>
    </Top>
    <MultiFactorAuth />
  </WrappedContent>
);

const mapStateToProps = state => ({
  user: state.user,
  verification: state.verification,
});

const mapDispatchToProps = {
  open2FaAuthModal: openMultiFactorAuthModal,
  goTo: push,
  noop: () => null,
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(
  Settings,
);

export default withUser(ConnectedSettings);
