import { useState, useEffect } from "react";
import API_KEY from "./Keys/keys";

const CONTEXT_KEY = "1eccab7b3bb1a4fb3";
const useGoogleSearch = term => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(results => {
          setData(results);
        });
    };
    setData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
