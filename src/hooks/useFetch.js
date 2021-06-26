import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/repos/facebook/react/issues`);
      setResult(response);
    };

    getResult();
    setLoading(false);
  }, []);

  return {result, isLoading};
};
