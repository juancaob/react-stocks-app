import axios from "axios";

const TOKEN="ccqeb82ad3i908o76vjgccqeb82ad3i908o76vk0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
});