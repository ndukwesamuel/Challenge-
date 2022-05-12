import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Page/Navbar";
import Home from "./Page/Home";
import Resgistration from "./Page/Resgistration";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Resgistration">
            <Resgistration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
