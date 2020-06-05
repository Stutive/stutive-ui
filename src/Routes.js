import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CourseExplorerView from './containers/CourseExplorerView';
import HomeView from './containers/HomeView';
import GenEdView from './containers/GenEdView';
import ScheduleView from './containers/ScheduleView';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/search">
          <CourseExplorerView />
        </Route>
        <Route path="/general-education">
          <GenEdView />
        </Route>
        <Route path="/schedule">
          <ScheduleView />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
