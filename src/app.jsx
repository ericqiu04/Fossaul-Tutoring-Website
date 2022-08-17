import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../src/Header/nav";
import Home from "./home";
import Programs from "./programs/programs";

function App() {
  return (
    <div>
    <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/classes">
            <Programs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
