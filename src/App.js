import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import About from "./containers/About/About";
import HomePage from "./containers/HomePage/HomePage";
import Overview from "./containers/Overview/Overview";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/overview" component={Overview} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
