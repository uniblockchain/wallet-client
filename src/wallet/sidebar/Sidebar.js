// @flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginActions from '../../login/loginActions';
import { openSidebar } from './sidebarActions';
import './Sidebar.css';

type Props = {
  +open: boolean,
  +updateState: boolean => void,
  +logout: () => void,
};

export const Sidebar = (props: Props) => {
  const setSidebarState = (open: boolean) => {
    props.updateState(open);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary bmd-btn-icon"
        onClick={() => setSidebarState(true)}
      >
        <i className="material-icons">more_horiz</i>
      </button>
      <CSSTransition in={props.open} timeout={300} classNames="sideBarContent">
        <div
          className={`sideBarContent ${props.open
            ? 'sideBarContent-visible'
            : ''}`}
        >
          <ul className="navigation">
            <li>
              <Link to="/overview" onClick={() => setSidebarState(false)}>
                Overview
              </Link>
            </li>
            <li>
              <Link to="/wallet" onClick={() => setSidebarState(false)}>
                Wallet
              </Link>
            </li>
            <li>
              <Link to="/card" onClick={() => setSidebarState(false)}>
                Card
              </Link>
            </li>
            <li>
              <Link to="/marketplace" onClick={() => setSidebarState(false)}>
                Marketplace
              </Link>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <Link to="/settings" onClick={() => setSidebarState(false)}>
                My account
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setSidebarState(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button onClick={props.logout}>Log out</button>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = state => ({
  open: state.sidebar.open,
});

const mapDispatchToProps = {
  updateState: openSidebar,
  logout: loginActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
