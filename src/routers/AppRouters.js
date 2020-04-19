import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddexpensedPage from "../components/AddexpensedPage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import ErrorPage from "../components/ErrorPage ";
import Header from "../components/Header";

const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddexpensedPage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouters;
