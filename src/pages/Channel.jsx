import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router";

function Channel() {
  const params = useParams()
  // console.log(params.id)
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
      <Typography>Channel</Typography>
      <Link to={"/video/2"}>
        <Typography>Video</Typography>
      </Link>
      <Link to={"/search/3"}>
        <Typography>Search</Typography>
      </Link>
    </Box>
  );
}

export default Channel;
