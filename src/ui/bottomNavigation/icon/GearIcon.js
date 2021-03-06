// @flow
import React from 'react';
import styled from 'styled-components';
import { SvgIcon } from 'material-ui';

const Wrapper = styled.div`
  height: 36px;
  position: relative;
`;

const Notification = styled.span`
  background-color: #eb185d;
  color: white;
  border-radius: 10px;
  border: 1px solid white;
  padding: 0 7px;
  line-height: 1.3;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: -10px;
  font-family: OpenSansBold;
`;

export default (props: *) => (
  <Wrapper>
    <SvgIcon viewBox="-64 -64 500 500" {...props}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M386.7,212c-2.9,9.2-7.8,16.7-18,18.7c-5,0.9-10.3,0.4-15.4,0.7c-4,0.2-8.1,0.1-11.8,1.3c-16,4.9-21.3,25.4-9.9,37.7
	c3.5,3.8,7.4,7.2,11,10.9c9.5,9.9,9.9,24.2,0.6,34.2c-7.5,8-15.3,15.8-23.4,23.3c-9.9,9.2-24.5,8.9-34.4-0.3
	c-3.7-3.4-7-7.1-10.7-10.5c-7.3-6.8-15.8-8.6-24.9-4.6c-9.2,4-14,11.5-14,21.7c0,4.8,0.1,9.7,0,14.5c-0.3,13.5-11,24.4-24.5,24.6
	c-10.5,0.2-21,0.2-31.5,0c-13.1-0.2-23.6-10.7-24-23.9c-0.1-5,0-10-0.1-15c-0.2-10.3-4.9-17.8-14.4-22c-9.1-4-18-1.9-25.5,5.6
	c-3,2.9-5.9,5.9-8.9,8.8C95.9,348,81,348,70.1,337.4c-6.9-6.7-13.8-13.5-20.6-20.4c-11-11.2-10.9-25.7,0.1-36.9
	c3.2-3.2,6.6-6.1,9.6-9.4c6.6-7.1,8.5-15.3,4.6-24.4c-3.8-9-10.9-13.6-20.5-14.2c-5.1-0.3-10.3-0.1-15.5-0.1
	c-14.1-0.1-25.1-11-25.1-25c-0.1-10.2-0.1-20.3,0-30.5c0.1-13.3,10.8-24.1,24.1-24.4c5.3-0.2,10.7,0.1,16-0.1
	c10-0.3,17.1-5,21.1-14.2c3.9-9,2.1-17.3-4.6-24.4c-3.2-3.4-6.6-6.6-9.9-9.9c-10.6-10.7-10.7-25.4-0.2-36.1
	c7.1-7.2,14.4-14.4,21.7-21.4c10.3-9.8,25.2-9.6,35.5,0.2c3.5,3.3,6.8,6.9,10.3,10.2c7.2,6.5,15.4,8.4,24.5,4.5
	c9.1-3.9,14-11,14.4-20.9c0.2-5,0-10,0.1-15c0.1-14.2,10.8-25,24.9-25.1C190.8,0,201,0,211.2,0.1c12.2,0.1,22.7,9.9,23.5,22.1
	c0.4,5.5,0.2,11,0.2,16.5c0.1,10.6,5,18.3,14.7,22.3c9.8,4,18.6,1.8,26-5.7c2.9-2.9,5.9-5.9,8.9-8.8c10.7-10.3,25.6-10.4,36.3-0.1
	c7.1,6.8,14.1,13.7,21,20.7c11,11.3,10.9,25.7-0.3,36.8c-3.1,3.1-6.2,6.1-9.3,9.1c-7,7-8.7,15.3-5.2,24.3
	c3.7,9.4,11.1,14.2,21.2,14.7c4.5,0.2,9,0,13.5,0c12.4,0,20.4,6,23.9,17.8c0.2,0.8,0.7,1.5,1,2.2C386.7,185.3,386.7,198.7,386.7,212
	z M195.3,368.1c4.7,0,9.3,0,14,0c6.8-0.1,10.3-3.6,10.4-10.5c0.1-4.3,0-8.7,0-13c0.2-17.1,8.3-29.2,23.7-36.2
	c14.4-6.6,30.7-3.3,42.5,7.9c3.3,3.1,6.3,6.4,9.6,9.5c4.9,4.6,9.7,4.7,14.5,0.1c6.9-6.7,13.8-13.5,20.5-20.5c4.4-4.5,4.4-9,0-13.6
	c-3.2-3.4-6.6-6.5-9.9-9.9c-10.8-11-13.9-24.2-9.5-38.7c4.4-14.4,14.2-24.1,29.2-27.1c7.1-1.4,14.6-0.8,21.9-1.1
	c5.5-0.2,8.3-2.5,8.4-7.8c0.2-10.2,0.3-20.3,0-30.5c-0.2-6.2-3.3-8.7-9.7-8.8c-4.3,0-8.7,0.1-13,0c-16.9-0.3-29-8.6-35.5-23.8
	c-6.6-15.4-3.5-29.7,7.9-41.9c3.2-3.4,6.6-6.6,9.9-9.9c4.7-4.8,4.7-9-0.1-13.8c-6.7-6.8-13.4-13.4-20.2-20.1
	c-4.8-4.7-9.6-4.7-14.5-0.2c-4.3,4-8.1,8.5-12.6,12.1c-12.7,10-26.7,11.7-41.2,4.8c-14.4-6.8-22.3-18.5-22.8-34.7
	c-0.1-4.8,0.1-9.7-0.1-14.5c-0.2-6.6-3.5-9.8-9.9-9.9c-9-0.1-18-0.1-27,0c-6.3,0.1-9.8,3.6-10,9.9c-0.1,4.3,0,8.7,0,13
	c0,17.1-9.1,30.8-24.5,37.2c-14.9,6.1-30.8,2.8-42.7-9c-3-2.9-5.8-5.9-8.8-8.8c-4.6-4.4-9.5-4.6-14.1-0.2
	c-7.1,6.8-14,13.8-20.9,20.8c-4.3,4.4-4.2,8.7,0,13.2c3.3,3.5,6.9,6.8,10.2,10.2c10.3,10.8,13.5,23.7,9.3,37.8
	C76,154.3,66.4,164,51.5,166.9c-6.9,1.4-14.2,0.9-21.4,1c-7.9,0.2-11.4,3.5-11.5,11.2c0,8.7-0.1,17.3,0,26
	c0.1,7.2,3.6,10.8,10.7,10.9c4.7,0.1,9.3-0.1,14,0c16.2,0.4,28.1,8,34.9,22.5c6.7,14.5,4.9,28.6-5.4,41.1
	c-3.5,4.2-7.6,7.9-11.5,11.8c-4.9,5-4.9,9.2,0,14.3c6.7,6.8,13.4,13.5,20.2,20.1c4.8,4.6,9.6,4.6,14.5-0.1c3.1-3,6.1-6.1,9.2-9.2
	c10.7-10.3,23.3-14,37.6-9.9c14.6,4.1,24.5,13.6,27.6,28.6c1.5,7.2,0.9,14.9,1.2,22.4c0.3,7,3.6,10.4,10.5,10.4
	C186.7,368.1,191,368.1,195.3,368.1z"
        />
        <path
          d="M99.6,192c-0.1-52.7,42.6-95.4,94.7-96.1c52.2-0.7,97.3,41.6,97.4,96.1c0.1,53.2-43,96-96.3,96
	C142.3,288,99.6,245.2,99.6,192z M115.7,191.6c-0.1,44.3,35.6,80.3,79.7,80.4c44,0.1,80.3-36.2,80.1-80.2c-0.1-44-36-79.8-79.9-79.8
	C151.6,112,115.7,147.7,115.7,191.6z"
        />
      </svg>
    </SvgIcon>
    <Notification>1</Notification>
  </Wrapper>
);
