import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";

const Root = ({ children }) => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk, logger))}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default Root;
