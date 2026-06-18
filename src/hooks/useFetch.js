import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let res = await fetch(url);
        let result = await res.json();

        if (res.ok) {
          setData(result);
        }

        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
