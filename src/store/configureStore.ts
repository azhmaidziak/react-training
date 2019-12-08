import { createStore } from "redux";

import { Page } from "../models";
import { search } from "../preload";
import searchMovies from "../functions/middleware/serach_movies";

export default function configureStore(page: Page, init: boolean) {
  const store = createStore(
    (state, { type, payload }: { type: string; payload: any }) => {
      switch (type) {
        case "FETCH":
          console.log(type, payload);
          return Object.assign(state, { movies: payload });
        case "SEARCH":
          searchMovies(payload).then(response =>
            store.dispatch({ type: "FETCH", payload: response.body })
          );
          return state;
        default:
          return state;
      }
    },
    { ...page }
  );
  if (init) {
    searchMovies(search).then(response =>
      store.dispatch({ type: "FETCH", payload: response.body })
    );
  }
  return store;
}
