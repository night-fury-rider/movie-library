// This file is intended to serve as the single source of truth for all app level configurations.

const APP_CONFIG = {
  card: {
    defaultPoster: "/movie-thumbnails/000_placeholder.jpg",
    height: "200",
    width: 200,
  },
  ratings: {
    primaryValue: 0,
    imdbRatings: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    customRatings: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
};

export default APP_CONFIG;
