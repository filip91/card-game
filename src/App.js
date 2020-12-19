import React from "react";
import { Route } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import GameCards from "./container/GameCards/GameCards";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="container">
      <Route component={HomePage} path="/" exact />
      <Route component={GameCards} path="/game" />
      <Route
        path="*"
        exact
        component={() => <Modal text={"This page does not exist"} />}
      />
    </div>
  );
};

export default App;
