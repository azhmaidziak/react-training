import {fetchCompleted} from "./actions";
import {SEARCH_REQUEST} from "./types";
import {SearchBy} from "../../models";
import {Middleware} from "redux";

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

export {
    logger as logger,
    fetchMovies as fetchMovies
}