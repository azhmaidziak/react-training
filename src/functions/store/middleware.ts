import {fetchCompleted} from "./actions";
import {SEARCH_REQUEST, SHOW_MOVIE_DETAILS, SHOW_SEARCH} from "./types";
import {SearchBy} from "../../models";
import {Middleware} from "redux";
import { push } from 'react-router-redux'
import history from "./history"
import { routerMiddleware, connectRouter, RouterState } from 'connected-react-router/immutable';
const map = function (searchBy: SearchBy): string {
    switch (searchBy) {
        case SearchBy.GENRES:
            return "genres";
        case SearchBy.TITLE:
            return "title"
    }
};

const logger: Middleware = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
};

const fetchMovies: Middleware = store => next => action => {
    if (action.type === SEARCH_REQUEST) {
        const {query, searchBy} = action.payload;
        fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=${map(searchBy)}}`)
            .then(res => res.json())
            .then((result) => {
                    console.log('result ', result);
                    store.dispatch(fetchCompleted(result.data))
                },
                (error) => {
                    console.log(error)
                });
    }
    return next(action)
};

const redirectToMovie: Middleware = store => next => action => {
    if (action.type === SHOW_MOVIE_DETAILS) {
        history.push('/movie');
    }
    return next(action)
};
const redirectToSearch: Middleware = store => next => action => {
    if (action.type === SHOW_SEARCH) {
        history.push('/search');
    }
    return next(action)
};


export {
    logger as logger,
    fetchMovies as fetchMovies,
    redirectToMovie as redirectToMovie,
    redirectToSearch as redirectToSearch
}