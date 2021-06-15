import { useEffect, useState } from "react"
import api from "../api"


const useVideos = (defaultSearchTerm) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (value) => {
    api.get('/search', {
      params: {
        q: value,
      }
    })
      .then((result) => {
        const { data } = result;
        const { items } = data;
        setVideos(items);
      })
      .catch((err) => console.error(err))
  };

  return [ videos, search ];
}

export default useVideos;
