import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Sandbox from "./components/Sandbox";
import Crypto from "./components/Crypto";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/sandbox" component={Sandbox} />
        <Route exact path="/crypto" component={Crypto} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
