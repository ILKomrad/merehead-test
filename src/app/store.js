import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootReducer from './rootReducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);