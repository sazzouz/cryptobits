// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import Page from "./Page";
import { Dashboard } from "./Dashboard";

export const customRoutes = [
  <Route exact path="/dashboard" component={Dashboard} />,
  <Route exact path="/page" component={Page} />,
];
