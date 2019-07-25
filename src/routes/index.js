import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from '../pages/Layout';
import { Await } from '../components/Await';
import LoginForm from '../authentication/Login';
import SignupForm from '../authentication/Signup';


export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Layout} />
        <Route exact={true} path="/login" component={LoginForm} />
        <Route exact={true} path="/signup" component={SignupForm} />
      </Switch>
    </BrowserRouter>
  );