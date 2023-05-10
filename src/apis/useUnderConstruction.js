import axios from "axios";
import { useState } from "react";

const useUnderConstruction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMail = async (payload, cb) => {
    // setError(null);
    setLoading(true);
    try {
      const res = await axios.post(`/ecommerce/construction`, payload);
      // if (res.statusText !== "OK")
      //   throw new Error(res.msg || "Some error occured, please try again");
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      // console.log(err);
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    addMail,
    error,
  };
};

export default useUnderConstruction;
