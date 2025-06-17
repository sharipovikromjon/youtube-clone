import { Routes, Route } from "react-router";
// MUI Imports
import { Box } from "@mui/material";
// React Related Imports 
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Channel from "./pages/Channel";
import VideoDetail from "./pages/VideoDetail";
import Search from "./pages/Search";

function App() {
  return (
    <Box>
      {/* Navbar at the top */}
      <Navbar/>
      {/* Main content area */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="channel/:id" element={<Channel />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
