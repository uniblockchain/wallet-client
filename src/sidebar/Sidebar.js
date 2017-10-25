// @flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginActions from '../login/loginActions';
import { openSidebar } from './sidebarActions';
import { type Menu } from '../menu/index';
import './Sidebar.css';

type Props = {
  +menu: Menu,
  +open: boolean,
  +updateState: boolean => void,
  +logout: () => void,
};

type ListItemProps = {
  +link: string,
  +text: string,
};

export const Sidebar = (props: Props) => {
  const setSidebarState = (open: boolean) => {
    props.updateState(open);
  };
  const ListItem = ({ link, text }: ListItemProps) => (
    <li>
      <Link to={link} onClick={() => setSidebarState(false)}>
        {text}
      </Link>
    </li>
  );

  return (
    <div>
      <CSSTransition in={props.open} timeout={300} classNames="sideBarContent">
        <div
          className={`sideBarContent ${props.open
            ? 'sideBarContent-visible'
            : ''}`}
        >
          <ul className="navigation">
            {props.menu.map(it => (
              <ListItem key={it.link} link={it.link} text={it.name} />
            ))}
          </ul>
          <ul className="menu">
            <ListItem link="/settings" text="My account" />
            <ListItem link="/contact" text="Contact" />
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
