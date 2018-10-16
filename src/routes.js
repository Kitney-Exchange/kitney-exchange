import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
  </Switch>
);
