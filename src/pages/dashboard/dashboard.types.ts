interface IMovie {
  audioLanguages: string[];
  countryOfOrigin: string;
  customRating: number;
  directors: string[];
  genres: string[];
  id: number;
  imdbRating: number;
  originalLanguage: string;
  poster: string;
  printQuality: string;
  releaseYear: number;
  runningTime: number;
  seriesName: string;
  title: string;
}

type ISeriesType = "TV Series" | "Web Series";

interface IWebSeries {
  audioLanguages: string[];
  countryOfOrigin: string;
  customRating: number;
  createdBy: string[];
  genres: string[];
  id: number;
  imdbRating: number;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originalLanguage: string;
  poster: string;
  printQuality: string;
  releaseEndYear: number;
  releaseNetworks: string[];
  releaseStartYear: number;
  runningTime: number;
  title: string;
  type: ISeriesType;
}
