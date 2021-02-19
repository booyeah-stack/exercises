import axios from "axios";

const KEY = "AIzaSyBx1RLKLTSrxb6eLqZUFxX_o8kcFJd6f7M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
