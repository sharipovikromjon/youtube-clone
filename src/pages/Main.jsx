// Primary: #fcfaf5
// Secondary: #76323f
// React imports
import { useState } from "react";
import { Link } from "react-router";
import Category from "../components/Category";
// MUI Imports
import { Box, Container, Stack, Typography } from "@mui/material";
import Videos from "../components/Videos";

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const handleSelectedCategory = (category) => setSelectedCategory(category);
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
          <Videos/>
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
