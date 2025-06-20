import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com"; // /search
const options = {
  // method: 'GET',
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": `${import.meta.env.VITE_RAPID_API_KEY}`,
    "x-rapidapi-host": `${BASE_URL.replace("https://", "")}`, 
    // problem was with the host header having "https://" prefix
  },
};

export const APIUtil = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const items = response.data.items;

    // Fetch statistics for videos only
    const videoIds = items
      .filter((item) => item.id?.videoId)
      .map((item) => item.id.videoId)
      .join(",");
    if (videoIds) {
      const statsResponse = await axios.get(
        `${BASE_URL}/videos?part=statistics&id=${videoIds}`,
        options
      );
      const statsMap = statsResponse.data.items.reduce((acc, video) => {
        acc[video.id] = video.statistics;
        return acc;
      }, {});
      items.forEach((item) => {
        if (item.id?.videoId) {
          item.statistics = statsMap[item.id.videoId];
        }
      });
    }
    return items;
  },
};
