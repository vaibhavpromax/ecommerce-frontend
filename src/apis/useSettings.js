import axios from "axios";
import { useState } from "react";

const useProfileSettings = () => {
  const [getUserLoading, setGetUserLoading] = useState(true);
  const [getNotificationLoading, setGetNotificationLoading] = useState(true);
  const [changePasswordLoading, setChangePasswordLoading] = useState(true);
  const [fetchordersLoading, setFetchordersLoading] = useState(false);

  const fetchUser = async (cb) => {
    setGetUserLoading(true);
    try {
      const res = await axios.get(`/ecommerce/user/get-user-info`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetUserLoading(false);
    }
  };

  const changePassword = async (payload, cb) => {
    setChangePasswordLoading(true);
    try {
      const res = await axios.post(`/ecommerce/user/change-password`, payload);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setChangePasswordLoading(false);
    }
  };

  const fetchNotification = async (cb) => {
    setGetNotificationLoading(true);
    try {
      const res = await axios.get(`/ecommerce/user/get-notification`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetNotificationLoading(false);
    }
  };

  const fetchOrderDetails = async (cb) => {
    setFetchordersLoading(true);
    try {
      const res = await axios.get(`/ecommerce/order/get-orders`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setFetchordersLoading(false);
    }
  };

  return {
    fetchUser,
    fetchNotification,
    getNotificationLoading,
    getUserLoading,
    changePassword,
    changePasswordLoading,
    fetchOrderDetails,
    fetchordersLoading,
  };
};

export default useProfileSettings;
