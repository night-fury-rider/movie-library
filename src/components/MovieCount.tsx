import React from "react";
import { Typography, Paper, Box, Chip, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

interface MovieCountProps {
  totalMovies: number;
}

const MovieCount: React.FC<MovieCountProps> = ({ totalMovies }) => {
  return (
    <Box sx={styles.countContainer}>
      <Avatar sx={styles.count}>{totalMovies}</Avatar>
    </Box>
  );
};

const styles = {
  count: { bgcolor: deepOrange[500], width: 50, height: 50 },
  countContainer: { display: "flex", flexWrap: "wrap", gap: 1, mb: 1 },
};

export default MovieCount;
