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
    return response.data.items;
  },
};
