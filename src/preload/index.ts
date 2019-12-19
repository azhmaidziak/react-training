import {Movie, Page, View} from "../models";
import {createBatchProcessor, MovieMapper} from "../functions";
import * as filmsJson from "./films.json";

// todo: find and replace to lib implementation
const movies: Movie[] = createBatchProcessor(MovieMapper).apply(
    filmsJson.payload
);

export const page: Page = {
        title: "Something",
        view: View.SEARCH,
        top: {
            query: "string",
            movie: movies[0]
        },
        movies: movies
    }
;

export const template = (html: string): string =>
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
        <title>Movies Application</title>
        <link rel="stylesheet" type="text/css" href="/assets/index.css">
      </head>
      <body>
        <div id="root">${html}</div>
      <script src="/assets/client.js"></script>
      </body>
    </html>`;
