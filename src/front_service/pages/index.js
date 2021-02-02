
import React from "react";

import { AppWithAuthentication } from "../src/components/App";

import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => (
  <AppWithAuthentication>
    <h1>Landing</h1>
    <p>
      The Landing Page is open to everyone, even though the user isn't signed
      in.
    </p>
  </AppWithAuthentication>
);
export default LandingPage;
