import { Box, Typography } from "@mui/material";
import { Link } from "react-router";

function Search() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: "15px",
        justifyContent: "center",
      }}
    >
      <Link to={"/"}>
        <Typography>Main</Typography>
      </Link>
      <Link to={"/channel/1"}>
        <Typography>Channel</Typography>
      </Link>
      <Link to={"/video/2"}>
        <Typography>Video</Typography>
      </Link>
      <Typography>Search</Typography>
    </Box>
  );
}

export default Search;
