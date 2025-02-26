import React from "react";
import { Box } from "@mui/material";
import MovieCard, { iMovieCardProps } from "./MovieCard";

interface MovieListProps {
  movies: iMovieCardProps[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <Box sx={styles.container}>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          genres={movie.genres}
          imdbRating={movie.imdbRating}
          customRating={movie.customRating}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 2, // Space between each card
    mt: 3, // Margin top to create space above the movie list
  },
};

export default MovieList;
