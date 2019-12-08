import { SearchParameters } from "../../models";
import { stringify } from "query-string";

export default async function searchMovies(parameters: SearchParameters) {
  return await fetch(
    `https://reactjs-cdp.herokuapp.com/movies?` + stringify(parameters)
  );
}
