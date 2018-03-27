// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import type { MapStateToProps } from 'react-redux';
import { Card, GradientButton, Link } from '../../ui';
import withUser from '../../user/withUser';
import { VERIFICATION_INTRO_ROUTE } from '../../verification/constants';
import svgRocket from './img/rocket.svg';

export type Props = {
  isVerified: boolean,
};

const Rocket = styled.img`
  margin: 0 0 3px 2px;
`;

export const VerificationButton = ({ isVerified }: Props) => (
  <div>
    {!isVerified && (
      <Card>
        <div className="text-center">
          <GradientButton inline className="mt-3">
            <Link to={VERIFICATION_INTRO_ROUTE}>
              Take the next step{' '}
              <Rocket height="16px" src={svgRocket} alt="Rocket" />
            </Link>
          </GradientButton>
        </div>
      </Card>
    )}
  </div>
);

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  isVerified: state.user.isVerified,
});

export default withUser(connect(mapStateToProps)(VerificationButton));
