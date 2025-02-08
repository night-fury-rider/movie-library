// Use this file as single source of truth for all strings/messages which are visible to user (including error messages)
// Prefer keeping strings inside appropriate module objects

const COMMON = {
  colorScheme: {
    light: "light",
    dark: "dark",
  },
  errorsMsg: {
    itemNotFound: "Unable to find the item",
  },
  metadata: {
    title: "Movie Library",
    description: "Modern web app to explore a curated movie collection",
  },
};

const DASHBOARD = {
  filters: {
    genres: {
      categories: [
        "Action",
        "Adventure",
        "Alien",
        "Animation",
        "Comedy",
        "Dance",
        "Drama",
        "Dinosaurs and Animals",
        "Fantasy",
        "Horror Ghost",
        "Horror Non-ghost",
        "Mystery",
        "Planning",
        "Romance",
        "Sci-Fi",
        "Superhero",
        "Vampire vs Zombies",
        "Wars",
      ],
      primaryTitle: "All",
      title: "Genre",
    },
    languages: {
      categories: ["English", "Hindi", "Korean", "Marathi"],
      primaryTitle: "All",
      title: "Languages",
    },
    moreFilters: {
      expandMore: {
        tooltip: "Expand Filters",
      },
      expandLess: {
        tooltip: "Collapse Filters",
      },
    },
    ratings: {
      primaryTitle: "All",
    },
    searchbar: {
      title: "Search Movies",
    },
  },
  card: {
    customRating: "Yuvraj",
    genre: "Genre",
    imdbRating: "IMDB",
    year: "Year",
  },
};

export { COMMON, DASHBOARD };
