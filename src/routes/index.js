import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from '../pages/Layout';
import { Await } from '../components/Await';


export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Layout} />
        <Route exact={true} path="/await" component={Await} />
      </Switch>
    </BrowserRouter>
  );