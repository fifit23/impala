import React from 'react';
import Home from "./Container/Home/Home";
import Aboute from "./Container/About/About";
import Contac from "./Container/Contact/Contact";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>
        <Route path="/Aboute">
          <Aboute />
        </Route>
        <Route path="/Contac">
          <Contac />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;