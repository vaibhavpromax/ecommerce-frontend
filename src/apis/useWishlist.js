import axios from "axios";
import { useState } from "react";

const useWishlist = () => {
  const [getWishlistLoading, setGetWishlistLoading] = useState(true);
  const [addWishlistLoading, setAddWishlistLoading] = useState(true);
  const [removeWishLoading, setRemoveWishLoading] = useState(true);

  const getWishlist = async (cb) => {
    setGetWishlistLoading(true);
    try {
      const res = await axios.get(`/ecommerce/wishlist/get-wishlist`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetWishlistLoading(false);
    }
  };

  const addToWishlist = async (id, cb) => {
    setAddWishlistLoading(true);
    try {
      const res = await axios.post(`/ecommerce/wishlist/add-wishlist/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setAddWishlistLoading(false);
    }
  };
  const removeFromWishlist = async (id, cb) => {
    setRemoveWishLoading(true);
    try {
      const res = await axios.delete(
        `/ecommerce/wishlist/remove-wishlist/${id}`
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setRemoveWishLoading(false);
    }
  };

  return {
    getWishlist,
    getWishlistLoading,
    addToWishlist,
    addWishlistLoading,
    removeFromWishlist,
    removeWishLoading,
  };
};

export default useWishlist;
