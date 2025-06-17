import { Box, Typography } from "@mui/material"
import { Link } from "react-router"

function VideoDetail() {
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
        <Typography>Video</Typography>
      <Link to={"/search/3"}>
        <Typography>Search</Typography>
      </Link>
    </Box>
  )
}

export default VideoDetail