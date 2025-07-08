// /hooks/use-fetch.js
import { useState } from "react";

const useFetch = (fn) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callFn = async (...args) => {
    setLoading(true);
    try {
      const result = await fn(...args);
      setData(result);
    } catch (err) {
      setError(err);
      setData(undefined);
    } finally {
      setLoading(false);
    }
  };

  return {
    fn: callFn,
    data,
    loading,
    error,
  };
};

export default useFetch;
