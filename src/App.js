import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Tips from "./apps/tips/tips";
import Doc_ui_cya from "./apps/guide-frontend/doc_ui_cya";

import GsCcBody from "./apps/guide-frontend/components/gs_cc_body";
import GsViewMain from "./apps/guide-frontend/components/gs_view_main";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"}>
          <Doc_ui_cya />
        </Route>
        <Route path={"/:site"}>
          <GsCcBody />
        </Route>
        <Route path="*">
          <Tips error="404" />
        </Route>
      </Switch>
    </Layout>
  );
}
