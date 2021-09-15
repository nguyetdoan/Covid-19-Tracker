import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import About from "./containers/About/About";
import HomePage from "./containers/HomePage/HomePage";
import Prevention from "./containers/Prevention/Prevention";
import Symptoms from "./containers/Symptoms/Symptoms";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/symptoms" component={Symptoms} />
        <Route path="/prevention" component={Prevention} />
      </Switch>
    </Router>
  );
}

export default App;
