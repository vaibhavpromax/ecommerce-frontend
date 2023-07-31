import axios from "axios";
import { useState } from "react";

const useShop = () => {
  const [getProductsLoading, setGetProductsLoading] = useState(false);

  const getProducts = async (cb) => {
    setGetProductsLoading(true);
    try {
      const res = await axios.get(`/ecommerce/products/get-products`);
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setGetProductsLoading(false);
    }
  };

  return {
    getProducts,
    getProductsLoading,
  };
};

export default useShop;
