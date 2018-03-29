// @flow
import React from 'react';
import MaterialBottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withStyles } from 'material-ui/styles';
import ConversionIcon from './icon/ConversionIcon';
import DashboardIcon from './icon/DashboardIcon';
import CardIcon from './icon/CardIcon';
import GearIcon from './icon/GearIcon';
import type { Menu } from '../../menu';

type Props = {
  +menu: Menu,
  +value: string,
  +onNavigation: string => void,
  +classes: any,
};

type IconProps = {
  item: string,
  classes: any,
};

const iconStyles = {
  root: {
    width: '36px',
    height: '36px',
  },
};

const Icon = withStyles(iconStyles)(({ item, classes }: IconProps): any => {
  switch (item) {
    case '/overview':
      return <DashboardIcon classes={{ root: classes.root }} />;
    case '/wallet':
      return <ConversionIcon classes={{ root: classes.root }} />;
    case '/card':
      return <CardIcon classes={{ root: classes.root }} />;
    case '/settings':
      return <GearIcon classes={{ root: classes.root }} />;
    default:
      return null;
  }
});

const navigationStyles = {
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '66px',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
};

const buttonStyles = {
  root: {
    color: '#ccc',
    paddingTop: 8,
  },
  label: {
    fontSize: '12px',
    color: '#a1a1a1',
    display: 'none',
  },
  overview: {
    color: 'black !important',
  },
  wallet: {
    color: 'black !important',
  },
  card: {
    color: 'black !important',
  },
  settings: {
    color: 'black !important',
  },
};

const StyledBottomNavigationAction = withStyles(buttonStyles)(
  ({ classes, type, ...other }) => (
    <BottomNavigationAction
      classes={{
        root: classes.root,
        label: classes.label,
        selected: classes[type],
        labelSelected: classes[type],
      }}
      {...other}
    />
  ),
);

export const BottomNavigation = withStyles(navigationStyles)((props: Props) => {
  const { menu, value, classes, onNavigation } = props;
  const handleChange = (event, v) => {
    onNavigation(v);
  };
  return (
    <MaterialBottomNavigation
      classes={{ root: classes.root }}
      value={value}
      onChange={handleChange}
    >
      {menu.map(it => (
        <StyledBottomNavigationAction
          key={it.link}
          label={it.name}
          value={it.link}
          type={it.code}
          icon={<Icon item={it.link} />}
        />
      ))}
    </MaterialBottomNavigation>
  );
});

const mapStateToProps = state => ({
  value: state.router.location.pathname,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onNavigation: (link: string) => push(link),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);
