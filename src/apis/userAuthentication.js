import axios from "axios";
import { useState } from "react";

const useUserAuthentication = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  const loginUser = async (data, cb) => {
    setLoginLoading(true);
    try {
      const res = await axios.post(`/ecommerce/user/login`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoginLoading(false);
    }
  };

  const registerUser = async (data, cb) => {
    setRegisterLoading(true);
    try {
      const res = await axios.post(`/ecommerce/user/register`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setRegisterLoading(false);
    }
  };

  return {
    loginUser,
    loginLoading,
    registerUser,
    registerLoading,
  };
};

export default useUserAuthentication;
