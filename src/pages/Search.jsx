import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIUtil } from "../utils/api.util";
import Videos from "../components/Videos";

function Search() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (!id) return; // Validate id before making the API call
      try {
        const data = await APIUtil.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box
      sx={{
        p: 2,
        height: "90vh",
      }}
    >
      <Container maxWidth={"90%"}>
        <Typography variant="h4" fontWeight={"bold"} mb={2}>
          Search results for <span style={{ color: "#76323f" }}>{id}</span>{" "}
          videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}

export default Search;
