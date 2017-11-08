// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { slideInRight } from 'react-animations';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';

import { history, store } from './redux/reduxStore';
import App from './App';
import { Wallet, Send, Receive } from './wallet';
import { Signup } from './signup';
import { Login, Logout } from './login';
import { Overview } from './overview';
import { Card } from './card';
import { Marketplace } from './marketplace';
import { Landing } from './landing';
import { Settings } from './settings';
import { Sidebar } from './sidebar';
import { unregister } from './registerServiceWorker';
import tracker from './tracker';
import configuration from './configuration';
import requireAuthentication from './requireAuthentication';
import { pageTemplate } from './page';
import { DefaultTheme } from './ui';
import './index.css';

configuration.initialize();

tracker.initialize();

const animationEnter = keyframes`${slideInRight}`;

const Styled = styled.div`
  &.slide-enter {
    animation: 300ms ${animationEnter};
  }
`;

const PublicContent = withRouter(({ location, children }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={300}>
      <Switch location={location}>
        <Styled>{children}</Styled>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const page = component => requireAuthentication(pageTemplate(component));

render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={DefaultTheme}>
        <div>
          <PublicContent>
            <Route exact path="/" component={App} />
            <Route path="/landing" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
          </PublicContent>
          <Switch>
            <Route path="/overview" component={page(Overview)} />
            <Route path="/wallet" component={page(Wallet)} />
            <Route path="/send" component={page(Send)} />
            <Route path="/receive" component={page(Receive)} />
            <Route path="/card" component={page(Card)} />
            <Route path="/marketplace" component={page(Marketplace)} />
            <Route path="/settings" component={page(Settings)} />
          </Switch>
          <Route path="/sidebar">
            {({ match }) => (
              <CSSTransition
                in={match && match.isExact}
                classNames="slide"
                timeout={300}
              >
                <Styled>{match && <Sidebar />}</Styled>
              </CSSTransition>
            )}
          </Route>
        </div>
      </ThemeProvider>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

unregister();
