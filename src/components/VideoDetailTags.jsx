import { Tag } from "@mui/icons-material";
import { Chip } from "@mui/material";

const VideoDetailTags = ({ item, index }) => {
  return (
    <Chip
      label={item}
      key={index}
      sx={{
        marginTop: "10px",
        cursor: "pointer",
        ml: "10px",
        sx: "50%",
        md: "50%",
      }}
      deleteIcon={<Tag />}
      onDelete={() => {}}
      variant="outlined"
    />
  );
};

export default VideoDetailTags;
