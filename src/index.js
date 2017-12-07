// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { slideInRight } from 'react-animations';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ConnectedFlagsProvider } from 'flag';
import { Switch, Route, withRouter } from 'react-router';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';

import './initialize';
import { history, store } from './redux/reduxStore';
import './polyfills';
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
import { authenticatedPage } from './page';
import { DefaultTheme } from './ui';
import { routes } from './router';
import './index.css';
import { GoogleTagManager } from './tracker';
import { cardOrderRoutes } from './card/order';

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

render(
  <div>
    <GoogleTagManager gtmId="GTM-55R5ZNL" />
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <ConnectedFlagsProvider>
          <ThemeProvider theme={DefaultTheme}>
            <div>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={Landing} />
                <Route path="/careers" component={Landing} />
                <Route path="/legal" component={Landing} />
                <Route path="/notify-me-success" component={Landing} />
              </Switch>
              <PublicContent>
                <Route exact path={routes.BASE} component={App} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </PublicContent>
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route
                  path={routes.OVERVIEW}
                  component={authenticatedPage(Overview)}
                />
                <Route
                  path={routes.WALLET}
                  component={authenticatedPage(Wallet)}
                />
                <Route path="/send" component={authenticatedPage(Send)} />
                <Route path="/receive" component={authenticatedPage(Receive)} />
                <Route exact path="/card" component={authenticatedPage(Card)} />
                {cardOrderRoutes}
                <Route
                  path="/marketplace"
                  component={authenticatedPage(Marketplace)}
                />
                <Route
                  path="/settings"
                  component={authenticatedPage(Settings)}
                />
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
        </ConnectedFlagsProvider>
      </ConnectedRouter>
    </ReduxProvider>
  </div>,
  document.getElementById('root'),
);

unregister();
