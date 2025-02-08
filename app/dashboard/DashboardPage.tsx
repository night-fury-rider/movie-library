"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Paper,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import APP_CONFIG from "../lib/app.config.constants";
import moviesData from "../../public/movies.json";
import MovieFilter from "../ui/MovieFilter";
import MovieList from "../ui/MovieList";
import { DASHBOARD } from "../lib/strings.constants";
import MovieCount from "../ui/MovieCount";
import GoToTopButton from "../ui/GoToTopButton";

const DashboardPage = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(
    DASHBOARD?.filters?.genres?.primaryTitle
  );

  const [selectedIMDBRating, setSelectedIMDBRating] = useState(0);
  const [selectedCustomRating, setSelectedCustomRating] = useState(0);
  const [areFiltersExpanded, setAreFiltersExpanded] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(
    DASHBOARD?.filters?.languages.primaryTitle
  );

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
          selectedGenre === DASHBOARD?.filters?.genres.primaryTitle
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

    // Apply language filter
    if (selectedLanguage) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.languages.indexOf(selectedLanguage) > -1 ||
          selectedLanguage === DASHBOARD?.filters?.languages.primaryTitle
      );
    }

    // Update the state with filtered movies
    setMovies(filteredMovies);
  }, [
    searchQuery,
    selectedGenre,
    selectedIMDBRating,
    selectedCustomRating,
    selectedLanguage,
  ]);

  const handleFilterExpansion = () => {
    setAreFiltersExpanded(!areFiltersExpanded);
  };
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
                  label={DASHBOARD?.filters?.searchbar?.title}
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                  sx={styles.searchbar}
                />
              </Grid>
              <Grid offset={{ xs: 0, md: 0.5 }} size={{ xs: 6, md: 2 }}>
                {/* Genre Filter  */}
                <MovieFilter
                  primaryOptionLabel={DASHBOARD?.filters?.genres.primaryTitle}
                  primaryOptionValue={DASHBOARD?.filters?.genres.primaryTitle}
                  options={DASHBOARD?.filters?.genres.categories}
                  selectedFilter={selectedGenre}
                  setSelectedFilter={setSelectedGenre}
                  title={DASHBOARD?.filters?.genres?.title}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 2 }}>
                {/* IMDB Filter  */}
                <MovieFilter
                  primaryOptionLabel={DASHBOARD?.filters?.ratings?.primaryTitle}
                  primaryOptionValue={APP_CONFIG.ratings.primaryValue}
                  options={APP_CONFIG.ratings.imdbRatings}
                  selectedFilter={selectedIMDBRating}
                  setSelectedFilter={setSelectedIMDBRating}
                  title={DASHBOARD.card.imdbRating}
                />
              </Grid>
              <Grid size={{ xs: 5, md: 2 }}>
                {/* Custom Rating Filter  */}
                <MovieFilter
                  primaryOptionLabel={DASHBOARD?.filters?.ratings?.primaryTitle}
                  primaryOptionValue={APP_CONFIG.ratings.primaryValue}
                  options={APP_CONFIG.ratings.customRatings}
                  selectedFilter={selectedCustomRating}
                  setSelectedFilter={setSelectedCustomRating}
                  title={DASHBOARD.card.customRating}
                />
              </Grid>
              <Grid offset={{ xs: 1, md: 0 }} size={{ xs: 5, md: 1 }}>
                <MovieCount totalMovies={movies.length} />
              </Grid>
              <Grid size={{ xs: 5, md: 0.5 }}>
                <Tooltip title="Expand/Collapse">
                  <IconButton onClick={() => handleFilterExpansion()}>
                    {!areFiltersExpanded ? (
                      <ExpandMoreIcon />
                    ) : (
                      <ExpandLessIcon />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {areFiltersExpanded && (
          <Paper>
            {/* Flexbox container for search and filters */}
            <Box sx={styles.searchAndFilterContainer}>
              <Grid container spacing={2}>
                <Grid offset={{ xs: 0, md: 4.5 }} size={{ xs: 6, md: 2 }}>
                  {/* Language Filter  */}
                  <MovieFilter
                    primaryOptionLabel={
                      DASHBOARD?.filters?.languages.primaryTitle
                    }
                    primaryOptionValue={
                      DASHBOARD?.filters?.languages.primaryTitle
                    }
                    options={DASHBOARD?.filters?.languages.categories}
                    selectedFilter={selectedLanguage}
                    setSelectedFilter={setSelectedLanguage}
                    title={DASHBOARD?.filters?.languages.title}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        )}

        {/* Movie List */}
        <MovieList movies={movies} />
      </Box>
      <GoToTopButton />
    </Container>
  );
};

const styles = {
  container: { paddingTop: 2, paddingBottom: 2 },
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
