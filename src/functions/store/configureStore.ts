import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import {fetchMovies, logger} from "./middleware";

const store = createStore(rootReducer, applyMiddleware(logger, fetchMovies));

export default store;