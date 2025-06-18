// Primary: #fcfaf5
// Secondary: #76323f
// React imports
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Category from "../components/Category";
// MUI Imports
import { Box, Container, Stack, Typography } from "@mui/material";
import Videos from "../components/Videos";
import { APIUtil } from "../utils/api.util";

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const handleSelectedCategory = (category) => setSelectedCategory(category);
  useEffect(() => {
    // Option 1: Using .then() method
    // APIUtil.fetching("search").then((data) => setVideos(data));
    // Option 2: Using async/await
    const fetchVideos = async () => {
      try {
        const data = await APIUtil.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data);
      } catch {
        console.error("Error fetching videos: ", error);
      }
    };
    fetchVideos();
  }, []);
  return (
    <Stack>
      <Category
        handleSelectedCategory={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Box sx={{ height: "90vh", p: 2 }}>
        <Container maxWidth={"90%"}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            mb={2}
            textAlign={"center"}
          >
            {selectedCategory} <span style={{ color: "#76323f" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
