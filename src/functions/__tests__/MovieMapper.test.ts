import MovieMapper from "../MovieMapper";
import { Film } from "../../models";
import * as payload from "./payload.test.json";
const movies = [
  {
    id: 337167,
    title: "Fifty Shades Freed",
    tagline: "Don't miss the climax",
    voteAverage: 6.1,
    voteCount: 1195,
    releaseDate: new Date("2018-02-07T00:00:00.000Z"),
    posterPath:
      "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    budget: 55000000,
    revenue: 136906000,
    genres: ["Drama", "Romance"],
    runtime: 106
  }
];
const { films }: { films: Film[] } = payload;

describe("Movie Mapper test", () => {

  it("Map Film from json to Movie", () => {
    const result = films.map(MovieMapper);
    expect(result).toEqual(movies);
  });
});
