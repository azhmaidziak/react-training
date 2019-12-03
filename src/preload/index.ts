import {Movie, Page, SearchParameters, SearchQuery} from "../models";
import { MovieMapper, createBatchProcessor } from "../functions";
import * as filmsJson from "./films.json";

// todo: find and replace to lib implementation
const movies: Movie[] = createBatchProcessor(MovieMapper).apply(
  filmsJson.payload
);

export const page: Page = {
  title: "Something",
  top: {
    query: "string"
  },
  movies: movies
};

export const search: SearchParameters =filmsJson.search;

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
