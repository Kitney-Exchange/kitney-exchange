import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./dux/reducer";
import promiseMiddleware from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

const store = createStore(reducer, middlewares);

export default store;
