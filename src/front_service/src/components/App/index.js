import React from "react";
import { compose } from "recompose";

import Navigation from "../Navigation";
import withAuthentication from "../Session/withAuthentication";
import withAuthorization from "../Session/withAuthorization";

const App = ({ children }) => (
  <div className="app">
    <Navigation />
    {children}
  </div>
);
const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorization(false)
)(App);
const AppWithAuthorization = compose(
  withAuthentication,
  withAuthorization(true)
)(App);
export { AppWithAuthentication, AppWithAuthorization };
