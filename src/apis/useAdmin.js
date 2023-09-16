import axios from "axios";
import { useState } from "react";

const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [getAdminInfoLoading, setGetAdminInfoLoading] = useState(false);
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);

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

  const getAdminInfo = async (cb) => {
    setGetAdminInfoLoading(true);
    try {
      const res = await axios.get(`/ecommerce/admin/get-admin-info`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetAdminInfoLoading(false);
    }
  };

  const changeAdminPassword = async (payload, cb) => {
    setChangePasswordLoading(true);
    try {
      const res = await axios.post(
        `/ecommerce/admin/change-admin-pass`,
        payload
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setChangePasswordLoading(false);
    }
  };

  return {
    getRegisteredEmails,
    getAdminInfo,
    getAdminInfoLoading,
    changeAdminPassword,
    changePasswordLoading,
  };
};

export default useAdmin;
