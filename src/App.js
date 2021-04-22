import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Tips from "./apps/tips/tips";
import YourApp from "./apps/guide-frontend/doc_ui_cya";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"}>
          <YourApp />
        </Route>
        <Route path={"/tips"}>
          <Tips />
        </Route>
        <Route path="*">
          <Tips error="404" />
        </Route>
      </Switch>
    </Layout>
  );
}
