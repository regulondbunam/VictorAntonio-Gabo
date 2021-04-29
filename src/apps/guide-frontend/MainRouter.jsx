import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import gs_ui_component from './components/gs_ui_component';

export const MainRouter = () => {
  return (

    <Router>
      <div>

        <Switch>

          <Route exact path="/ui-component" component={ gs_ui_component } />

        </Switch>

      </div>
    </Router>

  )
}
