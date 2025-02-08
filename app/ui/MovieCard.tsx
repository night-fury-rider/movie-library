import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Chip,
} from "@mui/material";
import APP_CONFIG from "../lib/app.config.constants";
import { DASHBOARD } from "../lib/strings.constants";

export interface iMovieCardProps {
  customRating: number;
  genres: string[];
  imdbRating: number;
  title: string;
  year: number;
  poster?: string;
}

const MovieCard: React.FC<iMovieCardProps> = ({
  customRating,
  genres,
  imdbRating,
  title,
  year,
  poster,
}) => {
  return (
    <Card sx={styles.container}>
      {/* Thumbnail Image */}
      <CardMedia
        component="img"
        height={"314"}
        image={poster || APP_CONFIG.card.defaultPoster}
        alt={title}
        sx={styles.cardMedia}
      />

      {/* Card Content */}
      <CardContent sx={{ padding: 3 }}>
        {/* Movie Title */}
        <Typography variant="h6" component="div" sx={styles.title}>
          {title}
        </Typography>

        {/* Genres */}
        <Box sx={styles.genreContainer}>
          {genres.map((genre, index) => (
            <Chip key={index} label={genre} sx={styles.genre} />
          ))}
        </Box>

        {/* IMDB and Custom Ratings */}
        <Box sx={styles.ratingContainer}>
          {/* IMDB Rating */}
          <Typography variant="body2" color="text.secondary" sx={styles.rating}>
            {DASHBOARD.card.imdbRating} {imdbRating}
          </Typography>

          {/* Custom Rating */}
          <Typography variant="body2" color="text.secondary" sx={styles.rating}>
            {DASHBOARD.card.customRating} {customRating}
          </Typography>

          {/* Year */}
          <Typography variant="body2" color="text.secondary" sx={styles.rating}>
            {DASHBOARD.card.year} {year}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardMedia: {
    objectFit: "cover",
  },
  container: {
    maxWidth: 250,
    boxShadow: 3,
    borderRadius: 2,
    overflow: "hidden",
    width: 250,
    "&:hover": {
      boxShadow: 8,
      transform: "scale(1.05)",
      transition: "all 0.3s ease",
    },
  },
  genre: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: "12px",
    padding: "5px 10px",
    fontSize: "0.8rem",
  },
  genreContainer: { display: "flex", flexWrap: "wrap", gap: 1, mb: 1 },
  rating: { fontWeight: 500 },
  ratingContainer: { display: "flex", justifyContent: "space-between", mt: 2 },
  title: {
    fontWeight: "bold",
    color: "#333",
    fontSize: "1.2rem",
    lineHeight: 1.4,
    mb: 1,
    textTransform: "capitalize",
  },
};

export default MovieCard;
