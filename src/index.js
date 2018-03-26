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

import './polyfills';
import './initialize';
import appWrapper from './appWrapper';
import { history, store } from './redux/reduxStore';
import App from './App';
import { Wallet, Send, Receive } from './wallet';
import { Signup } from './signup';
import { Login, Logout } from './login';
import { Overview, WalletComingSoon } from './overview';
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
import verificationRoutes from './verification/routes';
import ResetPassword, { ResetPasswordDone } from './user/password/reset';
import UpdatePassword from './user/password/update';
import Verification from './verification/Verification';

const animationEnter = keyframes`${slideInRight}`;

const Styled = styled.div`
  &.slide-enter {
    animation: 200ms ${animationEnter};
  }
  &.slide-exit {
    display: none;
  }
`;

const PublicContent = withRouter(({ location, children }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={200}>
      <Switch location={location}>
        <Styled>{children}</Styled>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const WrappedSidebar = appWrapper(Sidebar);

const startApp = () => {
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
                  <Route exact path={routes.BASE} component={appWrapper(App)} />
                  <Route path="/login" component={appWrapper(Login)} />
                  <Route path="/signup" component={appWrapper(Signup)} />
                  <Route
                    path={routes.RESET_PASSWORD}
                    component={appWrapper(ResetPassword)}
                  />
                  <Route
                    path={routes.RESET_PASSWORD_DONE}
                    component={appWrapper(ResetPasswordDone)}
                  />
                </PublicContent>
                <Switch>
                  <Route path="/logout" component={appWrapper(Logout)} />
                  <Route
                    path={routes.WALLET_COMING_SOON}
                    component={appWrapper(WalletComingSoon)}
                  />
                  <Route
                    path={routes.OVERVIEW}
                    component={appWrapper(authenticatedPage(Overview))}
                  />
                  <Route
                    path={routes.WALLET}
                    component={appWrapper(authenticatedPage(Wallet))}
                  />
                  <Route
                    path="/send"
                    component={appWrapper(authenticatedPage(Send))}
                  />
                  <Route
                    path="/receive"
                    component={appWrapper(authenticatedPage(Receive))}
                  />
                  <Route
                    exact
                    path="/card"
                    component={appWrapper(authenticatedPage(Card))}
                  />
                  <Route
                    path="/marketplace"
                    component={appWrapper(authenticatedPage(Marketplace))}
                  />
                  <Route
                    path="/settings"
                    component={appWrapper(authenticatedPage(Settings))}
                  />
                  <Route
                    exact
                    path="/verify"
                    component={appWrapper(authenticatedPage(Verification))}
                  />
                  {verificationRoutes}
                </Switch>
                <Route path="/sidebar">
                  {({ match }) => (
                    <CSSTransition
                      in={match && match.isExact}
                      classNames="slide"
                      timeout={300}
                    >
                      <Styled>{match && <WrappedSidebar />}</Styled>
                    </CSSTransition>
                  )}
                </Route>
                <Route
                  path={routes.UPDATE_PASSWORD}
                  component={UpdatePassword}
                />
              </div>
            </ThemeProvider>
          </ConnectedFlagsProvider>
        </ConnectedRouter>
      </ReduxProvider>
    </div>,
    document.getElementById('root'),
  );
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}

unregister();
