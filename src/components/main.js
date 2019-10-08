import React from "react";
import { Switch, Route } from "react-router-dom";

import Landingpage from "./Landingpage";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
  <Switch>
    <Route Route exact path="/" component={Landingpage} />
    <Route Route exact path="/aboutme" component={Aboutme} />
    <Route Route exact path="/contact" component={Contact} />
    <Route Route exact path="/projects" component={Projects} />
    <Route Route exact path="/resume" component={Resume} />
  </Switch>
);

export default Main;
