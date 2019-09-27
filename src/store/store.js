import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { rootReducer } from "../store/reducers";

const loggerMiddleware = createLogger();

const initialState = {};

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if(process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware)
}

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)