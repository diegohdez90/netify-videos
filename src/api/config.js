import axios from 'axios';
import { API_KEY } from './keys';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});
