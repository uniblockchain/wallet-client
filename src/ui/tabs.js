// @flow
import * as React from 'react';
import styled from 'styled-components';

type TabProps = {
  children: any,
  value: string,
  active: boolean,
  onSelect: string => void,
};

const StyledTab = styled.p`
  color: ${props => (props.active ? props.theme.main : props.theme.text)};
  text-transform: uppercase;
  padding: 8px 0px 8px 18px;
  margin: 0;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    left: 45%;
    bottom: 0;
    height: 2px;
    width: 24px;
    border-bottom: ${props => (props.active ? '2px solid #02bda5' : '')};
  }
`;

export const Tab = (props: TabProps) => (
  <StyledTab active={props.active} onClick={() => props.onSelect(props.value)}>
    {props.children}
  </StyledTab>
);

Tab.defaultProps = {
  active: false,
  onSelect: () => {},
};

type TabsProps = {
  +children: any,
  value?: string,
  +onSelect: string => void,
};

const StyledTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100vw;
  height: 48px;
`;

export const Tabs = ({ children, value, onSelect }: TabsProps) => (
  <StyledTabs>
    {React.Children.map(children, child => {
      if (child.props.value === value) {
        return React.cloneElement(child, {
          active: true,
          onSelect,
        });
      }
      return React.cloneElement(child, {
        onSelect,
      });
    })}
  </StyledTabs>
);

Tabs.defaultProps = {
  value: undefined,
};

export default { Tabs, Tab };
