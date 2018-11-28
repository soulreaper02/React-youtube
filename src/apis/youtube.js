import axios from "axios";

const KEY = "AIzaSyBqcLF47X25pT_nIKvf0K9Qv515aDkJBho";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
