import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import CourseExplorer from './containers/CourseExplorer'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CourseExplorer />
        </Route>
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes