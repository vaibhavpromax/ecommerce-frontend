import axios from "axios";
import { useState } from "react";

const useAdminAuthentication = () => {
  const [loginLoading, setLoginLoading] = useState(false);

  const loginAdmin = async (data, cb) => {
    setLoginLoading(true);
    try {
      const res = await axios.post(`/ecommerce/admin/login`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoginLoading(false);
    }
  };

  return {
    loginAdmin,
    loginLoading,
  };
};

export default useAdminAuthentication;
