import axios from "axios";
import { useState } from "react";

const useUnderConstruction = () => {
  const [loading, setLoading] = useState(false);

  const addMail = async (payload, cb) => {
    setLoading(true);
    try {
      const res = await axios.post(`/ecommerce/construction`, payload);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    addMail,
  };
};

export default useUnderConstruction;
