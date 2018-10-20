import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware, } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducers, initialState, } from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['user'],
    blacklist: ['user'],
}

// store.js
export const history = createHistory();
const middleware = routerMiddleware(history);
const persistedReducers = persistReducer(persistConfig, reducers);

export function configureStore() {
    // const store = createStore(reducers, initialState, applyMiddleware(middleware, thunk,logger));
    //const store = createStore(persistedReducers, initialState, applyMiddleware(middleware, thunk, logger));
    const store = createStore(persistedReducers, initialState, applyMiddleware(middleware, thunk, logger));
    return store;
};

// export const store = configureStore();
export const store = configureStore(history);
export const persistor = persistStore(store)
