// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../menu';
import { history } from '../reduxStore';
import './Sidebar.css';

type ListItemProps = {
  +link: string,
  +text: string,
};

export const Sidebar = () => {
  const ListItem = ({ link, text }: ListItemProps) => (
    <li key={link}>
      <Link to={link}>{text}</Link>
    </li>
  );

  return (
    <div className="sideBarContent">
      <button className="close" onClick={() => history.goBack()}>
        <i className="material-icons">close</i>
      </button>
      <ul className="navigation">
        {menu.map(it => (
          <ListItem key={it.link} link={it.link} text={it.name} />
        ))}
      </ul>
      <ul className="menu">
        <ListItem link="/settings" text="My account" />
        <ListItem link="/contact" text="Contact" />
        <ListItem link="/logout" text="Log out" />
      </ul>
    </div>
  );
};

export default Sidebar;
