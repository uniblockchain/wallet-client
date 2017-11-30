// @flow
import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';

import variables from './variables';

import ScrollToTop from './ScrollToTop';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Careers from './Careers';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import NotifyMeSuccess from './NotifyMeSuccess';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
`;

type Props = {};

type State = {
  hasScrolled: boolean,
};

type WaypointProps = {};

class Landing extends React.Component<Props, State> {
  state = {
    hasScrolled: false,
  };

  componentDidMount() {
    document.title = 'Change';
  }

  handleWaypointEnter = (props: WaypointProps) => {
    this.setState({ hasScrolled: false });
  };

  handleWaypointLeave = (props: WaypointProps) => {
    this.setState({ hasScrolled: true });
  };

  handleWaypointPositionChange = (props: WaypointProps) => {};

  render() {
    return (
      <ScrollToTop>
        <Container>
          <Waypoint
            onEnter={this.handleWaypointEnter}
            onLeave={this.handleWaypointLeave}
            onPositionChange={this.handleWaypointPositionChange}
          />

          <Header withBackground={this.state.hasScrolled} />

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/careers" component={Careers} />
            <Route path="/legal/terms" component={TermsAndConditions} />
            <Route path="/legal/privacy-policy" component={PrivacyPolicy} />
            <Route path="/notify-me-success" component={NotifyMeSuccess} />
            <Route path="/landing" component={Home} />
          </Switch>

          <Footer />
        </Container>
      </ScrollToTop>
    );
  }
}

export default withRouter(Landing);
