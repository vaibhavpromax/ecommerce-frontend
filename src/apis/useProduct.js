import axios from "axios";
import { useState } from "react";

const useProduct = () => {
  const [getProductLoading, setGetProductLoading] = useState(false);

  const getProduct = async (id, cb) => {
    setGetProductLoading(true);
    try {
      const res = await axios.get(`/ecommerce/products/get-product/${id}`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetProductLoading(false);
    }
  };

  return {
    getProduct,
    getProductLoading,
  };
};

export default useProduct;
