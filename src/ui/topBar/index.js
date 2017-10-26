// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import menu from '../../menu';
import Sidebar from '../../sidebar/Sidebar';
import { openSidebar } from '../../sidebar/sidebarActions';

type Props = {
  className: string,
  +sidebarOpen: boolean,
  +updateSidebarState: boolean => void,
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

const TopBar = ({ className, updateSidebarState, sidebarOpen }: Props) => {
  return (
    <div className={className}>
      <Left>C</Left>
      <Right>
        <button
          type="button"
          className="btn btn-primary bmd-btn-icon"
          onClick={() => updateSidebarState(true)}
        >
          <i className="material-icons">more_horiz</i>
        </button>
      </Right>
      <Sidebar menu={menu} open={sidebarOpen} />
    </div>
  );
};

const TopBarStyled = styled(TopBar)`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  color: ${props => (props.light ? '#ffffff' : '#54ccde')};
  padding: 15px 10px 0px 10px;
`;

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.open,
});

const mapDispatchToProps = {
  updateSidebarState: openSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarStyled);
