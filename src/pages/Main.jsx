import { Box, Typography } from "@mui/material";
import { Link } from "react-router";

function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: "15px",
        justifyContent: "center",
      }}
    >
      <Typography>Main</Typography>
      <Link to={`/channel/1`}>
        <Typography>Channel</Typography>
      </Link>
      <Link to={`/video/2`}>
        <Typography>Video</Typography>
      </Link>
      <Link to={`/search/3`}>
        <Typography>Search</Typography>
      </Link>

    </Box>
  );
}

export default Main;
