// @flow
import React from 'react';
import MaterialBottomNavigation, {
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
import type { Menu } from '../../menu';

type Props = {
  +menu: Menu,
  +value: string,
  +onNavigation: string => void,
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

const StyledBottomNavigation = styled(MaterialBottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const BottomNavigation = (props: Props) => {
  const { menu, value, onNavigation } = props;
  const handleChange = (event, v) => {
    onNavigation(v);
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
      onNavigation: (link: string) => push(link),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);
