// @flow

import React from 'react';
import styled from 'styled-components';
import { Card, GradientButton, Link } from '../../ui';
import { VERIFICATION_INTRO_ROUTE } from '../../verification/constants';
import svgRocket from './img/rocket.svg';

const Rocket = styled.img`
  margin: 0 0 3px 2px;
`;

export const VerificationButton = () => (
  <div>
    <Card>
      <div className="text-center">
        <GradientButton inline className="mt-3">
          <Link to={VERIFICATION_INTRO_ROUTE}>
            Verify account <Rocket height="16px" src={svgRocket} alt="Rocket" />
          </Link>
        </GradientButton>
      </div>
    </Card>
  </div>
);

export default VerificationButton;
