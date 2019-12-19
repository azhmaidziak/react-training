export enum SearchBy {
    TITLE = 0,
    GENRES = 1
}

export enum SortBy {
    REALIZE_DATE,
    RATING
}
export enum View {
    SEARCH,
    MOVIE
}

export type SearchModel = {
    search: string;
    searchBy: SearchBy;
};

export type Movie = {
    id: string;
    title: string;
    tagline: string;
    voteAverage: number;
    voteCount: number;
    releaseDate: Date;
    posterPath: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
};

export type Page = {
    title: string;
    view: View;
    top: PageTop;
    movies: Movie[];
};

export type Film = {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
};

export type PageTop = {
    query: string;
    movie: Movie
};

export enum SortOrder {
    DESC = "desc",
    ASC = "asc"
}

export type SearchParameters = {
    sortBy: SortBy;
    sortOrder: SortOrder;
    query: string;
    searchBy: SearchBy;
    filter: Array<string>;
    offset: number;
    limit: number;
};

export enum ButtonType {
    button = "button"
}
