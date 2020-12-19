import React from "react";
import { Route } from "react-router-dom";
import GameCards from "./container/GameCards/GameCards";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="container">
      <Route component={HomePage} path="/" exact />
      <Route component={GameCards} path="/game" />
    </div>
  );
};

export default App;
