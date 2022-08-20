import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../src/Header/nav";
import Home from "./home";
import Programs from "./programs/programs";

function App() {
  return (
    <div>
      <NavigationBar>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
      </NavigationBar>
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
