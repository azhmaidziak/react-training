import {Film, Movie, SearchModel} from "../../models";

export const SEARCH_REQUEST = "SEARCH_CHANGED";
export const SHOW_MOVIE_DETAILS = "SHOW_MOVIE_DETAILS";
export const FETCH_COMPLETED = "FETCH_COMPLETED";
export const SHOW_SEARCH = "SHOW_SEARCH";

interface SearchChangedAction {
    type: typeof SEARCH_REQUEST;
    payload: SearchModel;
}

interface FetchCompletedAction {
    type: typeof FETCH_COMPLETED;
    payload: Film[];
}

interface ShowMovieDetails {
    type: typeof SHOW_MOVIE_DETAILS;
    payload: Movie;
}
interface ShowSearch {
    type: typeof SHOW_SEARCH;
}
export type ActionTypes = SearchChangedAction | FetchCompletedAction | ShowMovieDetails| ShowSearch;