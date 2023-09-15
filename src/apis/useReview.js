import axios from "axios";
import { useState } from "react";

const useReview = () => {
  const [getReviewsLoading, setGetReviewsLoading] = useState(false);
  const [addReviewLoading, setAddReviewLoading] = useState(false);
  const getReviews = async (id, cb) => {
    setGetReviewsLoading(true);
    try {
      const res = await axios.get(`/ecommerce/review/get-product/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetReviewsLoading(false);
    }
  };

  const addReview = async (data, cb) => {
    setAddReviewLoading(true);
    try {
      const res = await axios.post(`/ecommerce/review/add-review`, data);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setAddReviewLoading(false);
    }
  };

  return {
    getReviews,
    getReviewsLoading,
    addReview,
    addReviewLoading,
  };
};

export default useReview;
