import axios from "axios";
import { useState } from "react";

const useUnderConstruction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMail = async (payload, cb) => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        `/ecommerce/construction`,
        payload
      );
      if (res.statusText !== "OK")
        throw new Error(res.msg || "Some error occured, please try again");
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    addMail,
  };
};

export default useUnderConstruction;
