import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Unmatched from "./components/Unmatched/unmatched";
import MatchedPage from "./components/Matched/matched";
import RecipientForm from "./components/RecipientForm/RecipientForm";
import DonorForm from "./components/DonorForm/DonorForm";
import Sorry from './components/Register/Sorry';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/unmatched" component={Unmatched} />
    <Route path="/matched" component={MatchedPage} />
    <Route path="/RecipientForm" component={RecipientForm} />
    <Route path="/DonorForm" component={DonorForm} />
    <Route path="/registerSubmit/:accepted" render={(props)=> (
      props.match.params.accepted === ":true" ? (
        console.log(props),
        <Redirect to="/RecipientForm"/>
      ) : (
        <Sorry/>
      )
    )}/>
  </Switch>
);
