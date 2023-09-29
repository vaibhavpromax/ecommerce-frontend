import axios from "axios";
import { useState } from "react";

const useCart = () => {
  const [getCartLoading, setGetCartLoading] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [getBlockedLoading, setGetBlockedLoading] = useState(false);

  const getCart = async (cb) => {
    setGetCartLoading(true);
    try {
      const res = await axios.get(`/ecommerce/cart/get-cart`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetCartLoading(false);
    }
  };

  const addToCart = async (payload, cb) => {
    setAddToCartLoading(true);
    try {
      const res = await axios.post(`/ecommerce/cart/add-cart`, payload);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setAddToCartLoading(false);
    }
  };
  const getBlockedStatus = async (cb) => {
    setGetBlockedLoading(true);
    try {
      const res = await axios.post(`/ecommerce/user/get-blocked-status`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetBlockedLoading(false);
    }
  };

  return {
    getCart,
    getCartLoading,
    addToCartLoading,
    addToCart,
    getBlockedLoading,
    getBlockedStatus,
  };
};

export default useCart;
