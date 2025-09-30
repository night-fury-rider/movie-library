// This file is intended to serve as the single source of truth for all app level configurations.

const APP_CONFIG = {
  card: {
    defaultPoster: "/movie-thumbnails/000_placeholder.jpg",
    height: "200",
    width: 200,
  },
  dateFormats: [
    {
      title: "DD-MMM-YYYY",
      value: "DD-MMM-YYYY",
    },
    {
      title: "YYYY-MM-DD",
      value: "YYYY-MM-DD",
    },
  ],
  decimalPlaces: 2,
  font: {
    family: "IBM Plex Serif",
  },
  languages: [
    {
      title: "English",
      value: "en",
    },
  ],
  numberFormats: [
    {
      title: "Indian Format (en-IN)",
      value: "en-IN",
    },
    {
      title: "US Format (en-US)",
      value: "en-US",
    },
  ],
  ratings: {
    primaryValue: 0,
    imdbRatings: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    customRatings: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
  sessionStorage: {
    storageAppData: "movieData",
    storageDateFormat: "dateFormat",
    storageLanguage: "language",
    storageNumberFormat: "numberFormat",
  },
};

export default APP_CONFIG;
