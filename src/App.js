import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import About from "./containers/About/About";
import AboutMe from "./containers/Aboutme/AboutMe";
import HomePage from "./containers/HomePage/HomePage";
import Overview from "./containers/Overview/Overview";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/overview" component={Overview} />
        <Route path="/aboutcovid" component={About} />
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
