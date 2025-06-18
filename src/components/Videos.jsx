import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos }) {
  if (!videos || !Array.isArray(videos) || videos.length === 0) {
    return <p>No videos available :(</p>;
  }
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item.id?.videoId || Math.random()}>
          {item.id?.videoId && <VideoCard videos={item} />}
          {item.id?.channelId && <ChannelCard videos={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
