import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import GsUiComponent from '../gs_ui_component';

export const ViewMainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/component" component={ GsUiComponent }/>

        </Switch>
      </div>
    </Router>
  )
}
