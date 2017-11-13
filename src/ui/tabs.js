// @flow
import * as React from 'react';
import styled from 'styled-components';

type TabProps = {
  children: any,
  value: string,
  active: boolean,
  onSelect: string => void,
};

const StyledTab = styled.h2`
  background-color: ${props => (props.active ? '#ffffff' : '#e5f9f3')};
  padding: 8px 15px 8px 15px;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
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
  +children: React.ChildrenArray<React.Element<typeof Tab>>,
  value?: string,
  +onSelect: string => void,
};

const StyledTabs = styled.div`
  background-color: #e5f9f3;
  color: #02bda5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  height: 80px;
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
