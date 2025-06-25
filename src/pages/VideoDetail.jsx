import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { APIUtil } from "../utils/api.util";
import Videos from "../components/Videos";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import ReactPlayer from "react-player";
import VideoDetailTags from "../components/VideoDetailTags";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await APIUtil.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data?.[0] || null); // Handle empty or invalid response
        const relatedData = await APIUtil.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relatedData || []); // Handle empty or invalid response
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  // if (!videoDetail || !videoDetail.snippet) return <h1>Loading...</h1>; // Add null check for videoDetail

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "70%" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
          </Box>
          <Box sx={{ width: "100%", mt: "10px" }}>
            {videoDetail?.snippet?.tags?.map((item, index) => (
              <VideoDetailTags item={item} index={index} />
            ))}
          </Box>
          <Typography variant="h5" fontWeight="bold" p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: ".7" }}>
            <span
              dangerouslySetInnerHTML={{
                __html: showFullDescription
                  ? videoDetail?.snippet?.description
                  : `${videoDetail?.snippet?.description?.slice(0, 100)}...`,
              }}
            />
            {!showFullDescription &&
              videoDetail?.snippet?.description?.length > 100 && (
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer", display: "inline" }}
                  onClick={() => setShowFullDescription(true)}
                >
                  more
                </Typography>
              )}
          </Typography>
          <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <Visibility />
              {parseInt(
                videoDetail?.statistics?.viewCount || 0
              ).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <FavoriteOutlined />
              {parseInt(
                videoDetail?.statistics?.likeCount || 0
              ).toLocaleString()}{" "}
              likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <MarkChatRead />
              {parseInt(
                videoDetail?.statistics?.commentCount || 0
              ).toLocaleString()}{" "}
              comment
            </Stack>
          </Stack>
          <Stack direction="row" py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack
                direction="row"
                alignItems="center"
                gap="5px"
                marginTop="5px"
              >
                <Avatar
                  alt={videoDetail?.snippet?.channelTitle}
                  src={videoDetail?.snippet?.thumbnails?.default?.url}
                />
                <Typography variant="subtitle2" color="gray">
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "30%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow={"scroll"}
          maxHeight={"150vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
