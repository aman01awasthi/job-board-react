import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        
        let res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        
        let result = await res.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;