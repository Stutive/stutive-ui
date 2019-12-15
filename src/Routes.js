import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CourseExplorerView from './containers/CourseExplorerView';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CourseExplorerView />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
