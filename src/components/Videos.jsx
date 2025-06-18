import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"center"}
      // sx={{
      //   justifyContent: {
      //     xs: "center",
      //     sm: "center",
      //     md: "center",
      //     lg: "start",
      //   },
      // }}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={2}
    >
      {Array.isArray(videos) ? (
        videos.map((item) => (
          <Box key={item.id.videoId || Math.random()}>
            {item.id.videoId && <VideoCard videos={item} />}
          </Box>
        ))
      ) : (
        <p>No videos available</p>
      )}
    </Stack>
  );
}

export default Videos;
