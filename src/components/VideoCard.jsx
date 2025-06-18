import { CheckCircle } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import moment from "moment/moment";

function VideoCard({ videos }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "400px", md: "345px" },
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <CardMedia
        component={"img"}
        image={
          videos?.snippet?.thumbnails?.high?.url ||
          "/png/placeholder-thumbnail.png"
        }
        alt={videos?.snippet?.title}
        sx={{
          width: { xs: "100%", sm: "400px", md: "345px" },
          height: "180px",
        }}
      />
      <CardContent
        sx={{
          backgroundColor: "#fcfaf5",
          height: "200px",
          position: "relative",
        }}
      >
        <>
          <Typography sx={{ my: "5px", opacity: "0.4" }}>
            {moment(videos?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            sx={{ maxWidth: "280px" }}
          >
            {videos?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography
            variant="subtitle2"
            opacity={"0.6"}
            sx={{ maxWidth: "300px" }}
          >
            {videos?.snippet?.description.slice(0, 50)}
          </Typography>
        </>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            alignItems={"center"}
            bottom={"10px"}
            gap={"5px"}
          >
            <Avatar src={videos?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" sx={{ color: "gray" }}>
              {videos?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
