import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

interface MovieFilterProps<T extends string | number> {
  primaryOptionLabel?: string;
  primaryOptionValue?: T;
  options: T[];
  selectedFilter: T;
  setSelectedFilter: React.Dispatch<React.SetStateAction<T>>;
  title: string;
}

const MovieFilter = <T extends string | number>({
  primaryOptionLabel,
  primaryOptionValue,
  options,
  selectedFilter,
  setSelectedFilter,
  title,
}: MovieFilterProps<T>) => {
  const getSuffixCharacter = (optionValue: T) =>
    typeof optionValue === "number" && optionValue < 10 && optionValue > 0
      ? "+"
      : "";

  return (
    <Box sx={styles.container}>
      {/* Genre Filter */}
      <FormControl variant="outlined" sx={styles.dropdownContainer}>
        <InputLabel>{title}</InputLabel>
        <Select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value as T)}
          label={title}
          sx={styles.dropdown}
        >
          <MenuItem value={primaryOptionValue}>{primaryOptionLabel}</MenuItem>

          {options.map((optionValue, index) => (
            <MenuItem value={optionValue} key={`${index}_${optionValue}`}>
              {optionValue}
              {getSuffixCharacter(optionValue)}
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
  dropdownContainer: { width: 150 },
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
