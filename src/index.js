import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import appReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import appRootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    {},
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(appRootSaga);

ReactDOM.render(
<Provider store={store}>
  <Home />
</Provider>, document.getElementById('root'));
