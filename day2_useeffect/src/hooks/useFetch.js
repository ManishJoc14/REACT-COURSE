import { useEffect, useState } from "react";

// always use prefix "use" for making custom hook 
// it allows us to use other react hooks inside this custom hook
const useFetch = (URL) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // This effect runs after the first render and whenever the URL changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);

        // Check if the response status is not OK (not 200–299)
        if (!res.ok) {
          throw new Error("Error during fetch");
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return { data, loading, error };
};

export default useFetch;
