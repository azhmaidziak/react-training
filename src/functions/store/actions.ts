import {Film, Movie, SearchBy} from "../../models";
import {ActionTypes, FETCH_COMPLETED, SEARCH_REQUEST, SHOW_MOVIE_DETAILS, SHOW_SEARCH} from "./types";

const createSearch = (request: { query: string, searchBy: SearchBy }): ActionTypes => ({
    type: SEARCH_REQUEST,
    payload: {
        search: request.query,
        searchBy: request.searchBy
    }
});


const fetchCompleted = (films: Film[]): ActionTypes => ({
    type: FETCH_COMPLETED,
    payload: films
});

const showMovieDetails = (movie: Movie):ActionTypes => ({
    type: SHOW_MOVIE_DETAILS,
    payload: movie
});

const showSearch = (): ActionTypes => ({
    type: SHOW_SEARCH
});

export {
    createSearch as createSearch,
    fetchCompleted as fetchCompleted,
    showMovieDetails as showMovieDetails,
    showSearch as showSearch
}

