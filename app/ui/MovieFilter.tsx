import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

interface MovieFilterProps {
  primaryOptionLabel?: string;
  primaryOptionValue?: string | number;
  options: string[] | number[];
  selectedFilter: string | number;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string | number>>;
  title: string;
}

const MovieFilter: React.FC<MovieFilterProps> = ({
  primaryOptionLabel,
  primaryOptionValue,
  options,
  selectedFilter,
  setSelectedFilter,
  title,
}) => {
  return (
    <Box sx={styles.container}>
      {/* Genre Filter */}
      <FormControl variant="outlined" sx={styles.dropdownContainer}>
        <InputLabel>{title}</InputLabel>
        <Select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          label={title}
          sx={styles.dropdown}
        >
          <MenuItem value={primaryOptionValue}>{primaryOptionLabel}</MenuItem>

          {options.map((optionValue, index) => (
            <MenuItem value={optionValue} key={`${index}_${optionValue}`}>
              {optionValue}
              {typeof optionValue === "number" ? "+" : ""}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  dropdownContainer: { width: 50 },
  dropdown: {
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
    "& .MuiOutlinedInput-root": {
      padding: "8px 12px",
    },
    "&:hover": {
      backgroundColor: "#e8e8e8",
    },
    width: 150,
  },
};

export default MovieFilter;