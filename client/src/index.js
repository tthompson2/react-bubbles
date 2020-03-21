import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import thunk from "redux-thunk";

import BubbleReducer from "./reducer/BubbleReducer";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";

const store = createStore(BubbleReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));