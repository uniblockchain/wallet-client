// @flow
import React from 'react';
import MaterialBottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withStyles } from 'material-ui/styles';
import OverviewIcon from './icon/OverviewIcon';
import WalletIcon from './icon/WalletIcon';
import CardIcon from './icon/CardIcon';
import MarketplaceIcon from './icon/MarketplaceIcon';
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
      return <OverviewIcon classes={{ root: classes.root }} />;
    case '/wallet':
      return <WalletIcon classes={{ root: classes.root }} />;
    case '/card':
      return <CardIcon classes={{ root: classes.root }} />;
    case '/marketplace':
      return <MarketplaceIcon classes={{ root: classes.root }} />;
    default:
      return null;
  }
});

const navigationStyles = {
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '66px',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
};

const buttonStyles = {
  label: {
    fontSize: '12px',
  },
  overview: {
    color: '#19c3ed',
  },
  wallet: {
    color: '#02bda5',
  },
  card: {
    color: '#00346b',
  },
  marketplace: {
    color: '#19c3ed',
  },
};

const StyledBottomNavigationButton = withStyles(
  buttonStyles,
)(({ classes, type, ...other }) => (
  <BottomNavigationButton
    classes={{ label: classes.label, selected: classes[type] }}
    {...other}
  />
));

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
      showLabels
    >
      {menu.map(it => (
        <StyledBottomNavigationButton
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
