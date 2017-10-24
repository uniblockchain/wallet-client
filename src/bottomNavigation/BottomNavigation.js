// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import OverviewIcon from './icon/OverviewIcon';
import WalletIcon from './icon/WalletIcon';
import CardIcon from './icon/CardIcon';
import MarketplaceIcon from './icon/MarketplaceIcon';
import type { Menu } from '../menu/index';

const styles = {
  root: {
    width: '100%',
  },
};

type Props = {
  +menu: Menu,
  +value: string,
  +to: string => void,
  +classes: ?Object,
};

type IconProps = {
  item: string,
};

const Icon = ({ item }: IconProps): any => {
  switch (item) {
    case '/overview':
      return <OverviewIcon />;
    case '/wallet':
      return <WalletIcon />;
    case '/card':
      return <CardIcon />;
    case '/marketplace':
      return <MarketplaceIcon />;
    default:
      return null;
  }
};

export const SimpleBottomNavigation = (props: Props) => {
  const { menu, classes, value, to } = props;
  const handleChange = (event, v) => {
    to(v);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      {menu.map(it => (
        <BottomNavigationButton
          key={it.link}
          label={it.name}
          value={it.link}
          icon={<Icon item={it.link} />}
        />
      ))}
    </BottomNavigation>
  );
};

const mapStateToProps = state => ({
  value: state.router.location.pathname,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      to: (link: string) => push(link),
    },
    dispatch,
  );

const Connected = connect(mapStateToProps, mapDispatchToProps)(
  SimpleBottomNavigation,
);
export default withStyles(styles)(Connected);
