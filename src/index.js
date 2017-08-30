import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import imageReducer from "./reducers/images";

const rootReducer = combineReducers({
  images: imageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

const appWithBrowserRouter = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(appWithBrowserRouter, document.getElementById("root"));
