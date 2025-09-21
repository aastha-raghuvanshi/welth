import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);

      if (response?.success) {
        setData(response);
        return response; // return so caller can use it
      } else {
        const errMsg = response?.message || "Unexpected error";
        setError({ message: errMsg });
        toast.error(errMsg);
        return null;
      }
    } catch (err) {
      const errMsg = err.message || "Unexpected error";
      setError({ message: errMsg });
      toast.error(errMsg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
