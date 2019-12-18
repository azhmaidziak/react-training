import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import {fetchMovies, logger, redirectToMovie, redirectToSearch} from "./middleware";
import history from "./history"
import {routerMiddleware} from "react-router-redux";

const store = createStore(rootReducer, applyMiddleware(logger, fetchMovies, redirectToMovie, redirectToSearch, routerMiddleware(history)));

export default store;