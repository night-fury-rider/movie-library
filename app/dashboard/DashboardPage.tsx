"use client";

import React, { useEffect, useState } from "react";
import { Container, Box, Paper, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import moviesData from "../../public/movies.json";
import MovieFilter from "../ui/MovieFilter";
import MovieList from "../ui/MovieList";
import { MOVIES } from "../lib/strings.constants";
import MovieCount from "../ui/MovieCount";
import APP_CONFIG from "../lib/app.config.constants";

const DashboardPage = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(
    MOVIES.genres.primaryTitle
  );
  const [selectedIMDBRating, setSelectedIMDBRating] = useState(0);
  const [selectedCustomRating, setSelectedCustomRating] = useState(0);

  useEffect(() => {
    let filteredMovies = [...moviesData];

    // Apply search query filter
    if (searchQuery) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply genre filter
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.genres.indexOf(selectedGenre) > -1 ||
          selectedGenre === MOVIES.genres.primaryTitle
      );
    }

    // Apply IMDB rating filter
    if (selectedIMDBRating) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.imdbRating >= selectedIMDBRating
      );
    }

    // Apply Custom rating filter
    if (selectedCustomRating) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.customRating >= selectedCustomRating
      );
    }

    // Update the state with filtered movies
    setMovies(filteredMovies);
  }, [searchQuery, selectedGenre, selectedIMDBRating, selectedCustomRating]);

  return (
    <Container>
      <Box my={4} sx={[styles.container]}>
        <Paper>
          {/* Flexbox container for search and filters */}
          <Box sx={styles.searchAndFilterContainer}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                {/* Search Bar */}
                <TextField
                  label={MOVIES.searchbar.title}
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                  sx={styles.searchbar}
                />
              </Grid>
              <Grid offset={{ xs: 1, md: 1 }} size={{ xs: 5, md: 2 }}>
                {/* Genre Filter  */}
                <MovieFilter
                  primaryOptionLabel={MOVIES.genres.primaryTitle}
                  primaryOptionValue={MOVIES.genres.primaryTitle}
                  options={MOVIES.genres.categories}
                  selectedFilter={selectedGenre}
                  setSelectedFilter={setSelectedGenre}
                  title={MOVIES.card.genre}
                />
              </Grid>
              <Grid offset={{ xs: 1, md: 0 }} size={{ xs: 5, md: 2 }}>
                {/* IMDB Filter  */}
                <MovieFilter
                  primaryOptionLabel={MOVIES.ratings.primaryTitle}
                  primaryOptionValue={APP_CONFIG.ratings.primaryValue}
                  options={APP_CONFIG.ratings.imdbRatings}
                  selectedFilter={selectedIMDBRating}
                  setSelectedFilter={setSelectedIMDBRating}
                  title={MOVIES.card.imdbRating}
                />
              </Grid>
              <Grid offset={{ xs: 1, md: 0 }} size={{ xs: 5, md: 2 }}>
                {/* Custom Rating Filter  */}
                <MovieFilter
                  primaryOptionLabel={MOVIES.ratings.primaryTitle}
                  primaryOptionValue={APP_CONFIG.ratings.primaryValue}
                  options={APP_CONFIG.ratings.customRatings}
                  selectedFilter={selectedCustomRating}
                  setSelectedFilter={setSelectedCustomRating}
                  title={MOVIES.card.customRating}
                />
              </Grid>
              <Grid offset={{ xs: 1, md: "auto" }} size={{ xs: 5, md: 1 }}>
                <MovieCount totalMovies={movies.length} />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* Movie List */}
        <MovieList movies={movies} />
      </Box>
    </Container>
  );
};

const styles = {
  container: { paddingTop: 2 },
  filters: {
    alignItems: "center",
  },
  searchAndFilterContainer: {},
  searchbar: {
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
};

export default DashboardPage;
