// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  className: string,
};

const Left = styled.div`
  width: 100%;
  color: ${props => (props.light ? '#ffffff' : '#e5f9f3')};
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: auto;
`;

const TopBarWithoutStyles = ({ className }: Props) => {
  return (
    <div className={className}>
      <Left>C</Left>
      <Right>
        <Link to="/sidebar">
          <button type="button" className="btn btn-primary bmd-btn-icon">
            <i className="material-icons">more_horiz</i>
          </button>
        </Link>
      </Right>
    </div>
  );
};

export const TopBar = styled(TopBarWithoutStyles)`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  color: ${props => (props.light ? '#ffffff' : '#54ccde')};
  padding: 15px 10px 0px 10px;
`;

export default TopBar;
