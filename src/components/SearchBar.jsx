// React Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import
// MUI Imports
import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedValue = value.trim(); // Ensure no leading/trailing spaces
    if (trimmedValue) {
      navigate(`/search/${encodeURIComponent(trimmedValue)}`); // Encode value for URL safety
      setValue("");
    }
  };
  const isDesktop = useMediaQuery("(min-width: 600px)");
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        display: "flex",
        border: "0.5px solid #76323f",
        pl: 2,
        boxShadow: "none",
        width: isDesktop ? "350px" : "200px",
      }}
    >
      {/* Search input */}
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ border: "none", outline: "none", width: "100%" }}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
