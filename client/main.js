import { Meteor }                         from 'meteor/meteor';
import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { Router, Route, Switch }          from 'react-router-dom';

import Signup         from '../imports/ui/Signup';
import LinkPage       from '../imports/ui/LinkPage';
import NotFound       from '../imports/ui/NotFound';
import Login          from '../imports/ui/Login';

import browserHistory from '../imports/utils/History';

const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/links"  component={LinkPage} />
      <Route path="/"       component={Login} />
      <Route path="*"       component={NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});