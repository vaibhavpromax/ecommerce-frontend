import axios from "axios";
import { useState } from "react";

const useAdmin = () => {
  const [loading, setLoading] = useState(false);

  const getRegisteredEmails = async (cb) => {
    setLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get_emails`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    getRegisteredEmails,
  };
};

export default useAdmin;
