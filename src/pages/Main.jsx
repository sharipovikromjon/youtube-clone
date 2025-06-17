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
    APIUtil.fetching("search").then((data) => setVideos(data));
  }, []);
  return (
    <Stack>
      <Category
        handleSelectedCategory={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Box sx={{ height: "90vh", p: 2 }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{ color: "#76323f" }}>videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
