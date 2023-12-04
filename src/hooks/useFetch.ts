import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = (await response.json()) as T;
        setData(result);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Request was aborted");
          } else {
            setError(err.message || "Something went wrong");
          }
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort(); // Cancel the request when unmounting
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
