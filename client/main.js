import { Meteor }                         from 'meteor/meteor';
import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { Router, Route, Switch }          from 'react-router-dom';
import { Tracker }                        from 'meteor/tracker';

import Signup         from '../imports/ui/Signup';
import LinkPage       from '../imports/ui/LinkPage';
import NotFound       from '../imports/ui/NotFound';
import Login          from '../imports/ui/Login';

import browserHistory from '../imports/utils/History';
import { log } from 'util';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/links"  component={LinkPage} />
      <Route path="*"       component={NotFound} />
    </Switch>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenitcaedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/links');
  } else if (isAuthenitcaedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

