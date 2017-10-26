// @flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import loginActions from '../login/loginActions';
import { openSidebar } from './sidebarActions';
import { type Menu } from '../menu';
import './Sidebar.css';

export type Props = {
  +menu: Menu,
  +open: boolean,
  +path: string,
  +goto: string => void,
  +updateState: (boolean, string) => void,
  +logout: () => void,
};

type ListItemProps = {
  +link: string,
  +text: string,
};

export const Sidebar = (props: Props) => {
  const setSidebarState = (open: boolean, path: string) => {
    props.updateState(open, path);
  };
  const onExited = () => {
    props.goto(props.path);
  };
  const ListItem = ({ link, text }: ListItemProps) => (
    <li key={link}>
      <button onClick={() => setSidebarState(false, link)}>{text}</button>
    </li>
  );

  return (
    <div>
      <CSSTransition
        in={props.open}
        timeout={300}
        classNames="sideBarContent"
        onExited={onExited}
      >
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
  path: state.sidebar.path,
});

const mapDispatchToProps = {
  updateState: openSidebar,
  goto: path => push(path),
  logout: loginActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
