import { Meteor }                         from 'meteor/meteor';
import React                              from 'react';
import { Router, Route, Switch }          from 'react-router-dom';

import Signup         from '../ui/Signup';
import LinkPage       from '../ui/LinkPage';
import NotFound       from '../ui/NotFound';
import Login          from '../ui/Login';

import browserHistory from '../utils/History';
import { log } from 'util';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenitcaedPage = authenticatedPages.includes(pathname);
  
    if (isUnauthenticatedPage && isAuthenticated) {
      browserHistory.replace('/links');
    } else if (isAuthenitcaedPage && !isAuthenticated) {
      browserHistory.replace('/');
    }
}

export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/links"  component={LinkPage} />
      <Route path="*"       component={NotFound} />
    </Switch>
  </Router>
);