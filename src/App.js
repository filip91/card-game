import React, { Fragment } from "react";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import GamePage from "./container/GamePage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Fragment>
      <Route component={HomePage} path="/" exact />
      <Route component={GamePage} path="/game" />
    </Fragment>
  );
};

export default App;
