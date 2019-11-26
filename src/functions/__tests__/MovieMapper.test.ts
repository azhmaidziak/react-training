import MovieMapper from "../MovieMapper";
import {Film, Movie} from "../../models";

const {films, movies}: { films: Film[], movies: Movie[] } = require("../payload.test.json");

describe("Movie Mapper test", () => {
    const testMovies = movies
        .map(value => Object.assign(value, {releaseDate: new Date(value.releaseDate), genres: new Set<string>(value.genres)}));
    it("Map Film from json to Movie", () => {
        const result = films.map(MovieMapper);
        expect(result).toEqual(testMovies)
    })
});