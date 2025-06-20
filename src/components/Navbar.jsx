// React Related Imports
import { Link } from "react-router";
// MUI Imports
import { Stack, IconButton, Container } from "@mui/material";
import { Menu } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
// Components
import SearchBar from "./SearchBar";
import UploadAvatars from "./UploadAvatars";

function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 600px");
  return (
 
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"24px"}
        py={"8px"}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          backgroundColor: "#fcfaf5",
        }}
      >
        {/* Logo */}
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {isDesktop ? (
            // Show YouTube Icon only on Desktop
            <Link to={"/"}>
              <img src="/svg/youtube-icon.svg" alt="youtube-icon" />
            </Link>
          ) : (
            // Show Menu Icon only on Mobile
            <IconButton>
              <Menu />
            </IconButton>
          )}
        </Stack>
        {/* SearchBar */}
        <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"}>
          <SearchBar />
        </Stack>
        {/* User Avatar */}
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <UploadAvatars />
        </Stack>
      </Stack>
  );
}

export default Navbar;
