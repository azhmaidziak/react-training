import {Movie, Page, PageTop} from "../../models";
import {combineReducers} from "redux";
import * as preload from "../../preload";
import {createBatchProcessor, MovieMapper} from "../index";
import {ActionTypes, FETCH_COMPLETED, SEARCH_REQUEST} from "./types";
import { routerReducer } from 'react-router-redux'

const page: Page = Object.assign(preload.page, {movies: preload.page.movies});
const assignMovies = function (state: Movie[] = page.movies, action: ActionTypes): Movie[] {
    if (action.type === FETCH_COMPLETED) {
        return createBatchProcessor(MovieMapper).apply(action.payload);
    }
    return state;
};

const top = function (state: PageTop = page.top, action: ActionTypes): PageTop {
    if (action.type === SEARCH_REQUEST) {
        console.log(action);
    }
    return state;
};
const title = function (state: string = page.title, action: { type: string }): string {
    if (action.type === SEARCH_REQUEST) {
        return "Search Movie"
    }
    return state;
};

const rootReducer = combineReducers({
    movies: assignMovies,
    top: top,
    title: title,
    routing: routerReducer
});

export default rootReducer;