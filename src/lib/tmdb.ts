export interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genreIds: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

export default class TMDB {
  base_url: string;
  secure_base_url: string;
  bearerToken: string;
  apiVersion: string;

  constructor() {
    this.apiVersion = "3";
    this.base_url = `https://api.themoviedb.org/${this.apiVersion}`;
    this.secure_base_url = "https://image.tmdb.org/t/p/";
    this.bearerToken = process.env.REACT_APP_API_BEARER_TOKEN || "";
  }

  async tmdbFetch(endPoint: string, method: string = "GET") {
    console.log("TMBD Fetch Method");
    const options: Options = {
      method,
      headers: {
        accept: "application/json",
        Authorization: this.bearerToken,
      },
    };
    const url = this.base_url + endPoint;
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("TMBD Fetch Data response: ", data);
    return data;
  }

  // endPoint https://api.themoviedb.org/3/movie/
  async movieLists(list: "now_playing" | "popular" | "top_rated" | "upcoming") {
    return this.tmdbFetch(`/movie/${list}`);
  }

  // endPoint https://api.themoviedb.org/3/movie/{movie_id}
  async movieDetails(movieId: string) {
    return this.tmdbFetch(`/movie/${movieId}`);
  }

  // endPoint https://api.themoviedb.org/3/movie/{movie_id}/ videos | credits
  async movieVideos(movieId: string, movieInfo: "videos" | "credits") {
    return this.tmdbFetch(`/movie/${movieId}/${movieInfo}`);
  }

  async searchMovies(query: string) {
    console.log("fetch Search Movies Running...");
    const response = await fetch(
      // ok&include_adult=false&language=en-US&primary_release_year=2020&page=1&region=us&year=2020
      // query=movie&include_adult=true&language=en-US&page=1
      `${this.base_url}/search/movie?api_key=${this.apiVersion}&query=${query}&include_adult=true&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: this.bearerToken,
        },
      }
    );
    const data = await response.json();
    return data.results;
  }
}
