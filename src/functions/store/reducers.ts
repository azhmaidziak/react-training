import {Movie, Page, PageTop, View} from "../../models";
import {combineReducers} from "redux";
import * as preload from "../../preload";
import {createBatchProcessor, MovieMapper} from "../index";
import {ActionTypes, FETCH_COMPLETED, SEARCH_REQUEST, SHOW_MOVIE_DETAILS} from "./types";
import { routerMiddleware, connectRouter, RouterState } from 'connected-react-router/immutable';
import history from "./history";

const page: Page = Object.assign(preload.page, {movies: preload.page.movies});
const assignMovies = function (state: Movie[] = page.movies, action: ActionTypes): Movie[] {
    if (action.type === FETCH_COMPLETED) {
        return createBatchProcessor(MovieMapper).apply(action.payload);
    }
    return state;
};

const top = function (state: PageTop = page.top, action: ActionTypes): PageTop {
    switch (action.type) {
        case SHOW_MOVIE_DETAILS:
          return Object.assign(state, {movie: action.payload});
        default:
            return state;
    }
};
const title = function (state: string = page.title, action: { type: string }): string {
    if (action.type === SEARCH_REQUEST) {
        return "Search Movie"
    }
    return state;
};

const view = function (state: View = page.view, action: { type: string }): View {
    if (action.type === SHOW_MOVIE_DETAILS) {
        return View.MOVIE;
    }
    return state;
};

const rootReducer = combineReducers({
    movies: assignMovies,
    top: top,
    title: title,
    view: view,
    router : connectRouter(history)
});

export default rootReducer;