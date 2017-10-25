// @flow
import React from 'react';
import BottomNavigation, {
  BottomNavigationButton,
} from 'material-ui/BottomNavigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import OverviewIcon from './icon/OverviewIcon';
import WalletIcon from './icon/WalletIcon';
import CardIcon from './icon/CardIcon';
import MarketplaceIcon from './icon/MarketplaceIcon';
import type { Menu } from '../menu/index';

type Props = {
  +menu: Menu,
  +value: string,
  +to: string => void,
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

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const SimpleBottomNavigation = (props: Props) => {
  const { menu, value, to } = props;
  const handleChange = (event, v) => {
    to(v);
  };
  return (
    <StyledBottomNavigation value={value} onChange={handleChange} showLabels>
      {menu.map(it => (
        <BottomNavigationButton
          key={it.link}
          label={it.name}
          value={it.link}
          icon={<Icon item={it.link} />}
        />
      ))}
    </StyledBottomNavigation>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  SimpleBottomNavigation,
);
