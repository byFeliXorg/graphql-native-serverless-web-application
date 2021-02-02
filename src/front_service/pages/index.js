
import React from "react";

import HeroSection from '../src/components/Home/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../src/components/Home/Data';

import { AppWithAuthentication } from "../src/components/App";


const LandingPage = () => (
  <AppWithAuthentication>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
  </AppWithAuthentication>
);
export default LandingPage;
