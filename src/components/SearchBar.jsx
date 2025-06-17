// MUI Imports
import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function SearchBar() {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  return (
    <Paper
      component={"form"}
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
        style={{ border: "none", outline: "none", width: "100%" }}
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
