import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About, Home, TestemoniesDetails } from "../../pages";
import { Layout, NotFound } from "..";

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route sensitive exact path="/" component={Home} />
        <Route sensitive exact path="/about" component={About} />
        <Route sensitive exact path="/testemony/:id" render={(props) => <TestemoniesDetails {...props} />} />
        <Route path="*" render={() => <NotFound text={"Página não encontrada"} />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
